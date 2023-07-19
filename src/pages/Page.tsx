import { IonButtons, IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonMenuButton, IonPage, IonTitle, IonToolbar } from "@ionic/react"
import { useParams } from "react-router"
import "./Page.css"
import { camera } from "ionicons/icons"
import { usePhotoGallery } from "../hooks/usePhotoGallery"

const Page: React.FC = () => {
    const { name } = useParams<{ name: string }>()

    const { takePhoto } = usePhotoGallery()
    function handlePress() {
        alert("pressed")
        takePhoto()
    }
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>{name}</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <IonFab vertical="bottom" horizontal="center" slot="fixed">
                    <IonFabButton onClick={handlePress}>
                        <IonIcon icon={camera}></IonIcon>
                    </IonFabButton>
                </IonFab>
            </IonContent>
        </IonPage>
    )
}

export default Page
