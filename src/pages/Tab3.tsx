import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonText } from '@ionic/react';
import { useHistory } from 'react-router-dom';

const Tab3: React.FC = () => {
  const [nama, setNama] = useState<string>('');
  const [number, setNumber] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmpassword, setConfirmpassword] = useState<string>('');
  const [alamat, setAlamat] = useState<string>('');
  const [bpjs, setBpjs] = useState<string>('');
  const [ktp, setKtp] = useState<string>('');
  const [kk, setKk] = useState<string>('');

  const history = useHistory();

  const handleRegister = () => {
    // Lakukan validasi data (opsional)

    // Kirim data ke server atau lakukan tindakan lainnya
    console.log('Nama:', nama);
    console.log('Number:', number);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Confirmpassword:', confirmpassword);
    console.log('Alamat:', alamat);
    console.log('Bpjs:', bpjs);
    console.log('Ktp:', ktp);
    console.log('Kk:', kk);

    // Redirect ke halaman lain setelah register berhasil
    history.push('/login');
  };

  const goToLoginPage = () => {
    history.push("/login"); // Mengarahkan ke halaman registrasi
  };

  return (
    <IonPage>
     <IonToolbar color="success">
        <IonText color="light">
          <h1 class="ion-text-center">Selamat Datang di Puskesmas Curug</h1>
        </IonText>  
      </IonToolbar>
      <IonContent className="ion-padding" fullscreen>
      <IonCard>
            <IonCardHeader>
              <IonCardTitle>Profil Pengguna</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
        <div>
          <p>Nama :</p>
          <p>No Telp :</p>
          <p>Email :</p>
          <p>Alamat :</p>
          <p>No KTP :</p>
          <p>No Kartu Keluarga :</p>
          <p>No BPJS :</p>
        </div>
        </IonCardContent>
          </IonCard>
        <div className="ion-text-center ion-margin-horizontal">
          
        <IonCard>
            <IonCardHeader>
              <h2>Silahkan lengkapi informasi data diri</h2>
            </IonCardHeader>
            <IonCardContent>
        <IonInput
          fill="outline"
          placeholder="Alamat"
          value={alamat}
          onIonChange={(e) => setAlamat(e.detail.value!)}
          style={{ margin: '0px' }}
        />
        <IonInput
        fill="outline"
          type="tel"
          placeholder="No Ktp"
          value={ktp}
          onIonChange={(e) => setKtp(e.detail.value!)}
          style={{ marginTop: '20px' }}
        />
        <IonInput
        fill="outline"
          type="tel"
          placeholder="No Kartu Keluarga"
          value={kk}
          onIonChange={(e) => setKk(e.detail.value!)}
          style={{ marginTop: '20px' }}
        />
        <IonInput
        fill="outline"
          type="tel"
          placeholder="No BPJS"
          value={bpjs}
          onIonChange={(e) => setBpjs(e.detail.value!)}
          style={{ marginTop: '20px' }}
        />
        <IonButton expand="full" onClick={handleRegister}>Register</IonButton>
        </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
