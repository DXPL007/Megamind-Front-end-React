import React from 'react';
import ArtboardHome from './ArtboardHome';
import TabSlider from './TabSlider';
import StudySlider from './StudySlider';
import Winning from './Winning';
import Getreal from './Getreal';
import Premium from './Premium';
import MapUse from './MapUse';
import UniversityPartner from './UniversityPartner';
import ClientView from './ClientView';
import Abroad from './Abroad';

var Home = () => {

	return (
		<>
			<ArtboardHome />
			<Abroad/>
			<TabSlider />
			<StudySlider />
			<Winning />
			<Getreal />
			<Premium />
			<MapUse />
			<UniversityPartner />
			<ClientView />

		</>
	)
};

export default Home;
