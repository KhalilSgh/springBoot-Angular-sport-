package crocoteam.sport.services;

import crocoteam.sport.models.User;

public interface UserService {

	User addUser(User user);

	User findUserById(Long id);

	void deleteUser(Long id);

	User getUserByEmail(String email);

}