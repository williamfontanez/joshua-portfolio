// React
import React, { ReactNode } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

interface ResumeCardProps {
    children: ReactNode;
    sx?: object;
}

export default function ResumeCard({ children, sx, ...props}: ResumeCardProps) {
    return (
        <Card {...props} sx={{ borderRadius: 3,  boxShadow: 3,  mb: 2, ...sx }} >
            <CardContent>
                {children}
            </CardContent>
        </Card>
    );
}