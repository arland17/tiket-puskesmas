import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonText } from '@ionic/react';
import { useHistory } from 'react-router-dom';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();

  const handleLogin = () => {
    // Perform validation (optional)
    console.log('Email:', email);
    console.log('Password:', password);
    history.push('/tab1');
  };

  const goToRegisterPage = () => {
    history.push("/register"); // Redirect to register page
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" fullscreen>
        <div className="ion-text-center ion-margin-horizontal">
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>Login Your Account</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <h3>Welcome to TikeT App Puskesmas</h3>
              <div>
                <h3>Don't have an account?
                  <IonText color="primary" style={{ cursor: 'pointer' }} onClick={goToRegisterPage}>
                    Create Account
                  </IonText>
                </h3>
              </div>
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
              <IonButton expand="full" onClick={handleLogin}>Login</IonButton>
            </IonCardContent>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;