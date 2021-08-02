import {
  IonApp,
  IonContent,
  IonDatetime,
  IonHeader,
  IonItem,
  IonLabel,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React, { useState } from 'react';

import BiorhythmCard from './components/BiorhythmCard'

function App() {
  const [birthDate, setBirthDate] = useState('02-02-1991');
  const [targetDate, setTargetDate] = useState(new Date().toISOString());
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Biorhythms calculator</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
      {birthDate &&
        <BiorhythmCard birthDate={birthDate} targetDate={targetDate} />
        }
        <IonItem>
          <IonLabel position='floating'>Birth Date</IonLabel>
          <IonDatetime displayFormat='D MMM YYYY' value={birthDate}
            onIonChange={(event) => setBirthDate(event.detail.value)} />
        </IonItem>
        <IonItem>
          <IonLabel position='floating'>Target Date</IonLabel>
          <IonDatetime displayFormat='D MMM YYYY' value={targetDate}
            onIonChange={(event) => setTargetDate(event.detail.value)} />
        </IonItem>
      </IonContent>
    </IonApp>
  );
}

export default App;
