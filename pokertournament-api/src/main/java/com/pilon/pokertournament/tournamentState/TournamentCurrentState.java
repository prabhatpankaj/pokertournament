package com.pilon.pokertournament.tournamentState;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.pilon.pokertournament.tournaments.TournamentLevelStatusCode;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
@Entity
@Table(name="tournament_current_state")
public class TournamentCurrentState {
 
    @Id
    @Column
    @NotNull
    private Long tournamentId;

    @Column
    @NotNull
    private TournamentLevelStatusCode levelStatusCode;

    @Column
    @NotNull
    private Integer currentLevel;

    @Column
    @NotNull
    private Long durationRemainingSeconds;

    @Column
    @NotNull
    private LocalDateTime timestamp;
}
