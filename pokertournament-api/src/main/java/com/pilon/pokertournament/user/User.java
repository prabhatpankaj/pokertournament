package com.pilon.pokertournament.user;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.pilon.pokertournament.authority.Authority;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="users")
public class User {

    @Id
    @NotNull
    @Column
    private String username;

    @Column
    @NotNull
    @JsonIgnore
    private String password;

    @Column
    @NotNull
    private boolean enabled;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name="username")
    private List<Authority> authorities;

    @Column
    @NotNull
    private String firstName;

    @Column
    @NotNull
    private String lastName;
}