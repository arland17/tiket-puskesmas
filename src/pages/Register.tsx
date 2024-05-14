import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonText } from '@ionic/react';
import { useHistory } from 'react-router-dom';

const Register: React.FC = () => {
  const [nama, setNama] = useState<string>('');
  const [number, setNumber] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmpassword, setConfirmpassword] = useState<string>('');

  const history = useHistory();

  const handleRegister = () => {
    // Lakukan validasi data (opsional)

    // Kirim data ke server atau lakukan tindakan lainnya
    console.log('Nama:', nama);
    console.log('Number:', number);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirmpassword:', confirmpassword);

    // Redirect ke halaman lain setelah register berhasil
    history.push('/login');
  };

  const goToLoginPage = () => {
    history.push("/login"); // Mengarahkan ke halaman registrasi
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Register</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" fullscreen>
        <div className="ion-text-center ion-margin-horizontal">
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>Register Account</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <p>Please Register Your Account</p>
              <div>
              <h2>Sudah Mempunyai Akun?
                <IonText color="primary" style={{ cursor: 'pointer' }} onClick={goToLoginPage}>
           Login Akun
        </IonText></h2>
              </div>
        <IonInput
          fill="outline"
          placeholder="Nama"
          value={nama}
          onIonChange={(e) => setNama(e.detail.value!)}
          style={{ margin: '0px' }}
        />
        <IonInput
        fill="outline"
          type="tel"
          placeholder="Number"
          value={number}
          onIonChange={(e) => setNumber(e.detail.value!)}
          style={{ marginTop: '20px' }}
        />
        <IonInput
        fill="outline"
          type="email"
          placeholder="Email"
          value={email}
          onIonChange={(e) => setEmail(e.detail.value!)}
          style={{ marginTop: '20px' }}
        />
        <IonInput
        fill="outline"
          type="password"
          placeholder="Password"
          value={password}
          onIonChange={(e) => setPassword(e.detail.value!)}
          style={{ marginTop: '20px' }}
        />
        <IonInput
        fill="outline"
          type="confirmpassword"
          placeholder="Confirmpassword"
          value={confirmpassword}
          onIonChange={(e) => setConfirmpassword(e.detail.value!)}
          style={{ marginTop: '20px', marginBottom: '20px' }}
        />
        <IonButton expand="full" onClick={handleRegister}>Register</IonButton>
        </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Register;
