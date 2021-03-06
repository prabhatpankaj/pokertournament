package com.pilon.pokertournament.tournaments;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OrderBy;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

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
@Table(name="tournament_structures")
public class TournamentStructure {

    @Id
    @Column
    @NotNull
    private Long tournamentId;

    @OneToMany(cascade = CascadeType.ALL)
    @JoinColumn(name="tournamentId")
    @OrderBy("level_order")
    private List<TournamentLevel> levels; 
}