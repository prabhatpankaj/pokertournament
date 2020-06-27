package com.pilon.pokertournament.buyins;

import java.math.BigDecimal;
import java.time.LocalDateTime;

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

@NoArgsConstructor
@Data
@Entity
@Table(name="buyins")
public class BuyIn {
    @Id
    @Column
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long id;

    @Column
    @NotNull
    @NonNull
    private Long tournamentId;

    @Column
    @NotNull
    @NonNull
    private Long playerId;

    @Column
    @NotNull
    @NonNull
    private BigDecimal amount;

    @Column
    @NotNull
    @NonNull
    private LocalDateTime timestamp = LocalDateTime.now();
}