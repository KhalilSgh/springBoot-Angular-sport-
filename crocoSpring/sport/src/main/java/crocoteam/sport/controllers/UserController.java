package crocoteam.sport.controllers;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.LockedException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import crocoteam.sport.DTO.LoginRequest;
import crocoteam.sport.DTO.SignupRequest;
import crocoteam.sport.auth.JwtUtil;
import crocoteam.sport.models.Role;
import crocoteam.sport.models.User;
import crocoteam.sport.repositories.RoleRepo;
import crocoteam.sport.services.UserService;
import crocoteam.sport.servicesImpl.UserServiceImpl;

@RestController
@RequestMapping("/api/users")
public class UserController {

	@Autowired
	private UserService userService;

	@Autowired
	private UserServiceImpl userServiceImpl;
	@Autowired
	private RoleRepo roleRepository;
	@Autowired
	UserDetailsService userDetailsService;
	@Autowired
	AuthenticationManager authenticationManager;

	private final JwtUtil jwtUtil = new JwtUtil();

	@PostMapping("/signup")
	public User addUser(@RequestBody SignupRequest signUpRequest) throws IOException {

		User user = new User();
		user.setFirstName(signUpRequest.getFirstName());
		user.setLastName(signUpRequest.getLastName());
		user.setEmail(signUpRequest.getEmail());
		user.setPassword(signUpRequest.getPassword());
		user.setPhone(signUpRequest.getPhone());

		// Charger les rôles
		List<Role> roles = new ArrayList<>();
		for (String roleName : signUpRequest.getRoles()) {
			Role role = roleRepository.findByName(roleName)
					.orElseThrow(() -> new RuntimeException("Role not found: " + roleName));
			roles.add(role);
		}

		user.setRoles(roles);

		return userService.addUser(user);
	}

	@PostMapping("/login")
	public ResponseEntity<?> authenticate(@RequestBody LoginRequest loginRequest) {
		Map<String, Object> map = new HashMap<>();

		try {
			Authentication authentication = authenticationManager.authenticate(
					new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword()));

			if (authentication.isAuthenticated()) {
				UserDetails userDetails = userDetailsService.loadUserByUsername(loginRequest.getEmail());
				User user = userServiceImpl.getUserByEmail(loginRequest.getEmail());
				String token = jwtUtil.createToken1(userDetails, user);
				map.put("status", HttpStatus.OK.value());
				map.put("message", "Authentication successful");
				map.put("token", token);
				return ResponseEntity.ok(map);
			} else {
				map.put("status", HttpStatus.UNAUTHORIZED.value());
				map.put("message", "Authentication failed");
				return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(map);
			}
		} catch (BadCredentialsException ex) {
			map.put("status", HttpStatus.UNAUTHORIZED.value());
			map.put("message", "Bad credentials");
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(map);
		} catch (LockedException ex) {
			map.put("status", HttpStatus.UNAUTHORIZED.value());
			map.put("message", "Your account is locked");
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(map);
		} catch (DisabledException ex) {
			map.put("status", HttpStatus.UNAUTHORIZED.value());
			map.put("message", "Your account is disabled");
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(map);
		} catch (AuthenticationException ex) {
			map.put("status", HttpStatus.UNAUTHORIZED.value());
			map.put("message", "Authentication failed");
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(map);
		}
	}

	@PostMapping("/debug-password")
	public String debugPassword(@RequestBody Map<String, Object> rawRequest) {
		System.out.println("Raw request data: " + rawRequest);
		return "Password in raw request: " + rawRequest.get("password");
	}

}
