package com.pilon.pokertournament.tournaments;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name="tournament_levels")
public class TournamentLevel {
    
    @Id
    @NotNull
    @Column
    private Long id;

    @Column
    @NotNull
    private Long tournamentId;

    @Column(name = "level_order")
    @NotNull
    private Integer order;

    @Column
    @NotNull
    private String name;

    @Column
    @NotNull
    private Boolean isBreak;

    @Column
    @NotNull
    private Integer durationSeconds;

    @Column
    @NotNull
    private Integer smallBlind;

    @Column
    @NotNull
    private Integer bigBlind;

    @Column
    @NotNull
    private Integer ante;

    @Column
    @NotNull
    private String message;
}
