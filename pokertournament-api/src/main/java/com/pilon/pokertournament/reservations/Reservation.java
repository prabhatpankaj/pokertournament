package com.pilon.pokertournament.reservations;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import io.micrometer.core.lang.NonNull;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@Data
@Entity
@Table(name="reservations")
public class Reservation {
    @Id
    @Column
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @Column
    @NonNull
    private Long tournamentId;

    @Column
    @NonNull
    private Long playerId;

    @Column
    @NonNull
    private LocalDateTime timestamp = LocalDateTime.now();
}