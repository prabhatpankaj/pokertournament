package com.pilon.pokertournament.tournaments;

import java.time.LocalDateTime;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
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
@Table(name = "tournaments")
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

    // FIXIT: Maybe take this out. Make separate fetch.
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "id")
    private TournamentStructure structure;

    // FIXIT: Take this out. Make separate fetch.
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "id")
    private TournamentCurrentState currentState;

}