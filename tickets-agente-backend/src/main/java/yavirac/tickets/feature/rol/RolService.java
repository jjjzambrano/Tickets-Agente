package yavirac.tickets.feature.rol;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RolService {
    
    @Autowired
    RolRepository rolRepository;

    //CRUD = Create, Read, Update, Delete

    public Rol save(Rol rol){
        return rolRepository.save(rol);
    }

    public Rol findById(long id){
        return rolRepository.findById(id).orElse(new Rol());
    }

    public Rol update(Rol rol){
        return rolRepository.save(rol);
    }

    public void deleteById(long id){
        rolRepository.deleteById(id);
    }  
}
