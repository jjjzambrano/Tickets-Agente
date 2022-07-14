<<<<<<< HEAD:tickets-agente-backend/src/main/java/yavirac/tickets/feature/person/PersonService.java
package yavirac.tickets.feature.person;
=======
package yavirac.tickets.feature.sugerencia;
>>>>>>> sugerencia:tickets-agente-backend/src/main/java/yavirac/tickets/feature/sugerencia/SugerenciaService.java

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SugerenciaService {

    @Autowired
    SugerenciaRepository sugerenciaRepository;

    //CRUD = Create, Read, Update, Delete

    public Sugerencia save(Sugerencia sugerencia){

        return sugerenciaRepository.save(sugerencia);
    }

    public Sugerencia findById(long id){
        return sugerenciaRepository.findById(id).orElse(new Sugerencia());
    }

    public Sugerencia update(Sugerencia sugerencia){
        return sugerenciaRepository.save(sugerencia);
    }

    public void deleteById(long id){
        sugerenciaRepository.deleteById(id);
    }
    
}
