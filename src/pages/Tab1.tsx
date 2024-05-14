import {
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
  IonThumbnail,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import "./Tab1.css";
import { Chart, registerables } from "chart.js";
import { Bar } from "react-chartjs-2";
Chart.register(...registerables);

const Tab1: React.FC = () => {
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
  return (
    <IonPage>
      <IonToolbar color="success">
        <IonText color="light">
          <h1 class="ion-text-center">Selamat Datang di Puskesmas Curug</h1>
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
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
