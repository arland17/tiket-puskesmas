import {
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar,
  IonModal,
  IonInput,
  IonItemDivider,
  IonInputPasswordToggle,
} from "@ionic/react";
import { useState, useEffect } from "react";
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import ExploreContainer from "../components/ExploreContainer";
import "./Tab1.css";
import { Chart, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";
Chart.register(...registerables);
import { Plugins } from '@capacitor/core';
const { Geolocation } = Plugins;

const Tab1: React.FC = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-maps-script',
    googleMapsApiKey: 'AIzaSyCkrzq9dLe2aOlr07kuMLShbQDVDuIA_Fg',
  });

  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [showLoginModal, setShowLoginModal] = useState(false);

  useEffect(() => {
    if (isLoaded && document.getElementById('map')) {
      const mapOptions = {
        center: { lat: 37.7749, lng: -122.4194 },
        zoom: 12,
      };
      const map = new google.maps.Map(document.getElementById('map') as HTMLElement, mapOptions);
      setMap(map);
    }
  }, [isLoaded]);

  const labels = ["Poli Umum", "Poli Gigi", "Poli Anak", "Ruang Tindakan"];
  const data = {
    labels,
    datasets: [
      {
        label: "Jumlah Pasien",
        data: [12, 19, 3, 5],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const handleLoginClick = () => {
    setShowLoginModal(true);
  };

  const handleModalClose = () => {
    setShowLoginModal(false);
  };

  return (
    <IonPage>
      <IonToolbar>
        <IonImg slot="start" src="/public/image/logoPuskesmas.png" />
        <IonButtons slot="end">
          <IonButton>Home</IonButton>
          <IonButton>Daftar Nakes</IonButton>
          <IonButton>Daftar</IonButton>
          <IonButton onClick={handleLoginClick}>Login</IonButton>
        </IonButtons>
      </IonToolbar>
      <IonToolbar color="success">
        <IonText color="light">
          <h1 className="ion-text-center">Selamat Datang di Puskesmas Curug</h1>
        </IonText>
      </IonToolbar>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonGrid>
          <IonRow class="ion-align-items-start">
            <IonCol size="8" push="4">
              <Bar data={data}></Bar>

              <IonGrid>
                <IonRow class="ion-justify-content-around">
                  <IonCol size="3" className="ion-text-center">
                    <IonCard color="light">
                      <br></br>
                      <img
                        alt="Poli Umum"
                        src="/image/poliumum.png"
                        className="centered-image"
                        style={{ width: "100px", height: "100px" }}
                      />
                      <IonCardHeader>
                        <IonCardTitle className="centered-text card-title">
                          Poli Umum
                        </IonCardTitle>
                      </IonCardHeader>
                    </IonCard>
                  </IonCol>
                  <IonCol size="3" className="ion-text-center">
                    <IonCard color="light">
                      <br></br>
                      <img
                        alt="Poli Gigi"
                        src="/image/poligigi.png"
                        className="centered-image"
                        style={{ width: "100px", height: "100px" }}
                      />
                      <IonCardHeader>
                        <IonCardTitle className="centered-text card-title">
                          Poli Gigi
                        </IonCardTitle>
                      </IonCardHeader>
                    </IonCard>
                  </IonCol>
                  <IonCol size="3" className="ion-text-center">
                    <IonCard color="light">
                      <br></br>
                      <img
                        alt="Poli Anak"
                        src="/image/polianak.png"
                        className="centered-image"
                        style={{ width: "100px", height: "100px" }}
                      />
                      <IonCardHeader>
                        <IonCardTitle className="centered-text card-title">
                          Poli Anak
                        </IonCardTitle>
                      </IonCardHeader>
                    </IonCard>
                  </IonCol>
                  <IonCol size="3" className="ion-text-center">
                    <IonCard color="light">
                      <br></br>
                      <img
                        alt="Tindakan"
                        src="/image/tindakan.png"
                        className="centered-image"
                        style={{ width: "100px", height: "100px" }}
                      />
                      <IonCardHeader>
                        <IonCardTitle className="centered-text card-title">
                          Poli Tindakan
                        </IonCardTitle>
                      </IonCardHeader>
                    </IonCard>
                  </IonCol>
                </IonRow>
              </IonGrid>
            </IonCol>
            <IonCol size="4" pull="8">
              <IonContent class="ion-padding"></IonContent>
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle class="ion-text-center">
                    Antrian Poli Umum
                  </IonCardTitle>
                  <IonCardSubtitle class="ion-text-center">
                    Senin, 13 Mei 2024
                  </IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>
                  <IonList>
                    <IonItem lines="none">
                      <IonLabel>1. Raka Barajasena</IonLabel>
                    </IonItem>

                    <IonItem lines="none">
                      <IonLabel>2. Taufik Hazel</IonLabel>
                    </IonItem>

                    <IonItem lines="none">
                      <IonLabel>3. Arland</IonLabel>
                    </IonItem>

                    <IonItem lines="none">
                      <IonLabel>4. Asrul Sani</IonLabel>
                    </IonItem>
                  </IonList>
                </IonCardContent>
              </IonCard>
              <div id="map" style={{ width: '100%', height: '100vh' }} />
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonModal isOpen={showLoginModal} onDidDismiss={handleModalClose}>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Login</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={handleModalClose}>Close</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <IonItem>
              <IonLabel position="floating">Username</IonLabel>
              <IonInput></IonInput>
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Password</IonLabel>
              <IonInput type="password">
                <IonInputPasswordToggle slot="end"></IonInputPasswordToggle>
              </IonInput>
            </IonItem>
            <IonButton expand="full" onClick={handleModalClose}>Login</IonButton>
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
