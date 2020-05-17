package com.pilon.pokertournament.tournaments;

import java.time.LocalDateTime;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.OrderBy;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import com.pilon.pokertournament.tournamentState.TournamentCurrentState;

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
@Table(name="tournaments")
public class Tournament {

    @Id
    @Column
    @NotNull
    private Long id;

    @Column
    @NotNull
    private Long leagueId;

    @Column
    @NotNull
    private String name;

    @Column
    private String description;

    @Column
    @NotNull
    private String hostedBy;

    @Column
    @NotNull
    private LocalDateTime scheduledStart;

    @Column
    private String location;

    @Column
    @NotNull
    private TournamentStatusCode statusCode;

    @OneToMany
    @JoinColumn(name="tournamentId")
    @OrderBy("level")
    private List<TournamentLevel> levels;

    @OneToMany
    @JoinColumn(name="tournamentId")
    @OrderBy("afterLevel")
    private List<TournamentBreak> breaks;

    @OneToOne
    @JoinColumn(name="id")
    private TournamentCurrentState currentState;
}