package com.pilon.pokertournament.tournaments;

import java.time.LocalDateTime;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
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
    private List<TournamentLevel> levels;

    @OneToMany
    @JoinColumn(name="tournamentId")
    private List<TournamentBreak> breaks;

}