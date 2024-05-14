import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonContent, IonHeader, IonInput, IonItem, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import { useState } from 'react';

interface FormField {
  label: string;
  placeholder: string;
}

const BPJSFormFields: FormField[] = [{ label: 'Nomor Telepon', placeholder: 'Nomor Telepon' }];
const NonBPJSFormFields: FormField[] = [
  { label: 'Nama', placeholder: 'Nama' },
  { label: 'Nomor Telepon', placeholder: 'Nomor Telepon' },
  { label: 'Alamat Rumah', placeholder: 'Alamat Rumah' },
  { label: 'Nomor KTP', placeholder: 'Nomor KTP' },
];

const Tab2: React.FC = () => {
  const [showForm, setShowForm] = useState<'BPJS' | 'NonBPJS' | null>(null);

  const handleButtonClick = (formType: 'BPJS' | 'NonBPJS') => {
    setShowForm(formType);
  };

  return (
    <IonPage>
      <IonToolbar color="success">
        <IonText color="light">
          <h1 class="ion-text-center">Selamat Datang di Puskesmas Curug</h1>
        </IonText>
      </IonToolbar>
      <IonContent className="ion-padding" fullscreen>
        <div className="ion-text-center ion-margin-horizontal">
        <IonCard>
            <IonCardHeader>
              <IonCardTitle>Daftar Antri</IonCardTitle>
              <h2>Selamat Datang di Aplikasi TikeT, Silahkan anda untuk Login terlebih dahulu</h2>

            </IonCardHeader>
            <IonCardContent>
      <IonButton color="success" onClick={() => handleButtonClick('BPJS')}>BPJS</IonButton>
      <IonButton color="warning" onClick={() => handleButtonClick('NonBPJS')}>Non BPJS</IonButton>
      {showForm && (
        <div>
          {showForm === 'BPJS'
           ? BPJSFormFields.map((field, index) => (
                <IonItem key={index}>
                  <IonInput fill="outline" 
                  style={{ marginTop: '20px' }}
                  placeholder={field.placeholder} />
                </IonItem>
              ))
            : NonBPJSFormFields.map((field, index) => (
                <IonItem key={index}>
                  <IonInput fill="outline" 
                  style={{ marginTop: '20px' }}
                  placeholder={field.placeholder} />
                </IonItem>
              ))}
        </div>
      )}
      </IonCardContent>
    </IonCard>
    </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
