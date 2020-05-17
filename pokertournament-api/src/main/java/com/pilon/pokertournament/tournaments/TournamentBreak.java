
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
@Table(name="tournament_breaks")
public class TournamentBreak {
    
    @Id
    @NotNull
    @Column
    private Long id;

    @Column
    @NotNull
    private Long tournamentId;

    @Column
    @NotNull
    private Integer afterLevel;

    @Column
    @NotNull
    private String message;

}
