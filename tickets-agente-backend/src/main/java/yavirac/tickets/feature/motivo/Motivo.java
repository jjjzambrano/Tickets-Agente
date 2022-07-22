package yavirac.tickets.feature.motivo;


import java.sql.Timestamp;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

import lombok.Data;

@Data
@Table("motivos")
public class Motivo {
    
    
    @Id
    @Column("motivo_id")
    private long motivoId;

    private String descripcion;
    private Timestamp created;
    private Timestamp update;
    private boolean enabled;
    private boolean archived;

}
