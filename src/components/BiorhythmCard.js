import './BiorhythmCard.css';

import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from '@ionic/react'

import BiorhythmCharts from './BiorhythmCharts';
import React from 'react';
import { calculateBiorhythms } from '../calculations';
import dayjs from 'dayjs';

function formatDate(isoDate) {
    return dayjs(isoDate).format('DD MMM YYYY');
}
export default function BiorhythmCard({ birthDate, targetDate }) {
    const { physical, emotional, intellectual } = calculateBiorhythms(birthDate, targetDate);
    return (
        <IonCard className='bio-card ion-text-center'>
            <IonCardHeader>
                <IonCardTitle>{formatDate(targetDate)}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
                <BiorhythmCharts birthDate={birthDate} targetDate={targetDate} />
                <p className='physical'>Physical: {physical.toFixed(4)} </p>
                <p className='emotional'>Emotional: {emotional.toFixed(4)} </p>
                <p className='intellectual'>Intellectual: {intellectual.toFixed(4)} </p>
            </IonCardContent>
        </IonCard>
    )
}
