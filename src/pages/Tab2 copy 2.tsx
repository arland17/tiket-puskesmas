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

interface FormData {
  [key: string]: string;
}

const FormResult = ({ formData }: { formData: FormData }) => {
  return (
    <IonCard>
      <IonCardContent>
        <h2>Form Data:</h2>
        <pre>{JSON.stringify(formData, null, 2)}</pre>
      </IonCardContent>
    </IonCard>
  );
};

const Tab2: React.FC = () => {
  const [showForm, setShowForm] = useState<'BPJS' | 'NonBPJS' | 'result' | null>(null);
  const [formData, setFormData] = useState<{ [key: string]: string }>({});

  const handleButtonClick = (formType: 'BPJS' | 'NonBPJS') => {
    setShowForm(formType);
  };

  const handleFormSubmit = () => {
    console.log(formData);
    setShowForm('result');
  };

  const handleInputChange = (event: any) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <IonPage>
      <IonToolbar color="success">
        <IonText color="light">
          <h1 className="ion-text-center">Selamat Datang di Puskesmas Curug</h1>
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
                  name={field.label}
                  placeholder={field.placeholder}
                  value={formData[field.label]}
                  onIonChange={handleInputChange}
                  />
                </IonItem>
              ))
            : NonBPJSFormFields.map((field, index) => (
                <IonItem key={index}>
                  <IonInput fill="outline" 
                  style={{ marginTop: '20px' }}
                  name={field.label}
                  placeholder={field.placeholder}
                  value={formData[field.label]}
                  onIonChange={handleInputChange}
                  />
                </IonItem>
              ))}
        </div>
      )}
      <IonButton color="primary" onClick={handleFormSubmit}>Submit</IonButton>
      </IonCardContent>
    </IonCard>
    {showForm === 'result' && <FormResult formData={formData} />}
    </div>
      </IonContent>
    </IonPage>
  );
};


export default Tab2;