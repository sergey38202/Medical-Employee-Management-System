import React, { FC, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('../../pages/Home'));
const DoctorsPage = lazy(() => import('../../pages/Doctors'));
const NursesPage = lazy(() => import('../../pages/Nurses'));

export const MainRoutes: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/doctors" element={<DoctorsPage />} />
        <Route path="/nurses" element={<NursesPage />} />
      </Routes>
    </BrowserRouter>
  );
};
