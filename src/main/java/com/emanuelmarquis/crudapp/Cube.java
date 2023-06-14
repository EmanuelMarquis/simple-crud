package com.emanuelmarquis.crudapp;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;

@Entity
public class Cube {
    private @Id @GeneratedValue long id;
    public String msg, color;

    Cube() {}
    Cube (String msg, String color) {
        this.msg = msg;
        this.color = color;
    }

    public long getId() {
        return this.id;
    }

    public void setId(long id) {
        this.id = id;
    }

    @Override
    public String toString() {
        return String.format("Cube{ msg=%s ; color=%s }", this.msg, this.color);
    }
}
