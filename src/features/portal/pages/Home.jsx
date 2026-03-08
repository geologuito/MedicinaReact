import Card from '../../../components/ui/Card';
import Icon from '../../../components/ui/Icon';

export default function Home() {
  return (
    <div className="grid2">
      <Card title="Cobertura" icon="card">
        <div className="emptyHint">Contenido de cobertura (placeholder)</div>
      </Card>
      <Card title="Nuevo turno" icon="plus">
        <div className="centerAction">
          <div className="circlePlus">
            <Icon name="plus" size={34} />
          </div>
          <div className="actionTitle">Reservar turno</div>
        </div>
      </Card>
    </div>
  );
}