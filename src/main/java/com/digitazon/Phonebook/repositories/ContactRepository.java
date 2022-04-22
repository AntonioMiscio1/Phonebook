package com.digitazon.Phonebook.repositories;

import com.digitazon.Phonebook.entities.Contact;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ContactRepository extends JpaRepository<Contact, Integer> {
}