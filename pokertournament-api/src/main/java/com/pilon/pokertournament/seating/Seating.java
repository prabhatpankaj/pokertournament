package com.pilon.pokertournament.seating;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import io.micrometer.core.lang.NonNull;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@NoArgsConstructor
@Data
@Entity
@ToString
@Table(name = "seating")
public class Seating {
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
    private Long tableId;

    @Column
    @NotNull
    @NonNull
    private Integer seat;

    @Column
    private Long playerId;
}
