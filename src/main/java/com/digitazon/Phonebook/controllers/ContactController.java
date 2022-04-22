package com.digitazon.Phonebook.controllers;

import com.digitazon.Phonebook.entities.Contact;
import com.digitazon.Phonebook.repositories.ContactRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/contacts")
@CrossOrigin(origins = "*")
public class ContactController {
    private ContactRepository contactRepository;

    public ContactController(ContactRepository contactRepository) {
            this.contactRepository = contactRepository;
    }

    @GetMapping
    public List<Contact> all() {
        return contactRepository.findAll();
    }

    @PostMapping("/add")
    public Contact create(@RequestBody Contact newContact) {
        return contactRepository.save(newContact);
    }

    @PutMapping("/{id}")
    public Contact update(@PathVariable int id, @RequestBody Contact updatedContact) throws Exception {
        Contact contact = contactRepository.findById(id).orElseThrow();
        if (contact.isDone()) {
            throw new Exception("non puoi salvare un contatto già salvato");
        }
        contact.setName(updatedContact.getName());
        return contactRepository.save(contact);
    }

    @DeleteMapping("/{id}")
    public String delete(@PathVariable int id) {
        contactRepository.deleteById(id);
        return "ok";
    }
}
