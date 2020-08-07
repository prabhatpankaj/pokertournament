package com.pilon.pokertournament.pokertables;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

@NoArgsConstructor
@Data
@Entity
@Table(name = "tables")
public class PokerTable {
    @Id
    @Column
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    @NotNull
    @NonNull
    private Long tournamentId;
   
    @Column
    @NotNull
    @NonNull
    private String name;

    @Column
    @NotNull
    @NonNull
    private Integer seats;
}
