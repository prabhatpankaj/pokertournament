package com.pilon.pokertournament.authority;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.fasterxml.jackson.annotation.JsonValue;
import com.pilon.pokertournament.user.User;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name="authorities")
public class Authority {

    @Id
    @NotNull
    @Column(name = "id")
    private int id;

    @NotNull
    @Column(name = "username")
    private String username;

    @NotNull
    @JsonValue
    @Column(name = "authority")
    private String authority;

    @ManyToOne
    @JoinColumn(name="username", insertable=false, updatable=false)
    private User user;
}
