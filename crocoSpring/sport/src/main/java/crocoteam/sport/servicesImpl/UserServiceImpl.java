package crocoteam.sport.servicesImpl;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import crocoteam.sport.models.User;
import crocoteam.sport.repositories.UserRepo;
import crocoteam.sport.services.UserService;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepo userRepository;
	@Autowired
	private PasswordEncoder passwordEncoder;

	@Override
	public User addUser(User user) {
		// crypt password
		String encodedPassword = passwordEncoder.encode(user.getPassword());
		user.setPassword(encodedPassword);
		return userRepository.save(user);
	}

	@Override
	public User findUserById(Long id) {
		// TODO Auto-generated method stub
//		return userRepository.findById(id).get();

		Optional<User> user = userRepository.findById(id);
		return user.isPresent() ? user.get() : null;
	}

	@Override
	public void deleteUser(Long id) {
		// TODO Auto-generated method stub
		userRepository.deleteById(id);

	}

	public User getUserByEmail(String email) {
		// TODO Auto-generated method stub
		return userRepository.findUserByEmail(email);
	}

}
