<<<<<<< HEAD:tickets-agente-backend/src/main/java/yavirac/tickets/feature/person/Person.java
package yavirac.tickets.feature.person;
=======
package yavirac.tickets.feature.modulo;
>>>>>>> modulo:tickets-agente-backend/src/main/java/yavirac/tickets/feature/modulo/Modulo.java

import java.sql.Timestamp;

import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Column;
import org.springframework.data.relational.core.mapping.Table;

import lombok.Data;

@Data
@Table("modulo")
public class Modulo {

    @Id
    @Column("modulo_id")
    private long moduloId;
    
    private String name;
    private String url;
    private Timestamp created;
    private Timestamp updated;
    private boolean enabled;
    private boolean archive;
    
}
