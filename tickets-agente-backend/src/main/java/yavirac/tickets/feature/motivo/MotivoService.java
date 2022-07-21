package yavirac.tickets.feature.motivo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class MotivoService {
    @Autowired
    MotivoRepository motivoRepository;

    public Motivo save(Motivo motivo){

        return motivoRepository.save(motivo);
    }

    public Motivo findById(long id){
        return motivoRepository.findById(id).orElse(new Motivo());
    }

    public Motivo update(Motivo motivo){
        return motivoRepository.save(motivo);
    }

    public void deleteById(long id){
        motivoRepository.deleteById(id);
    }
}
