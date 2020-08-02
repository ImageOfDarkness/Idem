import React from "react";
import Card from "./Card";

const Main = () => {
  return (
    <main>
      <div className="conteiner">
        <div className="wrapper wrapper--horizontal col--12">
          <Card color="silver" rect big>
            Гений непредвзято понимает под собой конфликт. Закон внешнего мира,
            очевидно, реально подчеркивает аксиоматичный здравый смысл. Культ
            джайнизма включает в себя поклонение Махавире и другим тиртханкарам,
            поэтому закон исключённого третьего индуцирует изоморфный ротор.
          </Card>
          <div className="wrapper wrapper--vertical col--4">
            <Card color="silver" rect>
              Чувство однократно
            </Card>
            <Card color="silver" rect>
              Морено
            </Card>
          </div>
        </div>
        <div className="wrapper wrapper--horizontal col--12">
          <div className="wrapper wrapper--vertical col--8">
            <div className="wrapper wrapper--horizontal col--12">
              <Card color="white" className="col--6">
                Наши сотрудники
              </Card>
              <Card color="white" className="col--6">
                Просветляет понимающий тест
              </Card>
            </div>
            <div className="wrapper wrapper--horizontal">
              <Card color="white">Конформизм</Card>
            </div>
          </div>
          <div className="wrapper wrapper--vertical col--4">
            <Card color="blue">Интроекция</Card>
            <Card color="yellow">Наши сотрудники</Card>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Main;
