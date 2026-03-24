import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/Card';
import { mockImpacts } from '../../data/mockData';

export function ImpactDashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-2xl font-semibold tracking-tight">Impact Results</h2>
        <p className="text-muted-foreground">Estimated lifecycle impacts based on validated datasets. <span className="text-primary/80 text-xs uppercase tracking-wider ml-2 border border-primary/20 bg-primary/10 px-2 py-0.5 rounded">Demo Data</span></p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Climate Change (kg CO2 eq)</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={mockImpacts}>
                <CartesianGrid strokeDasharray="3 3" stroke="#262626" />
                <XAxis dataKey="stage" stroke="#a3a3a3" fontSize={12} tickFormatter={(val) => val.replace(/([A-Z])/g, ' $1').trim()} />
                <YAxis stroke="#a3a3a3" fontSize={12} />
                <Tooltip cursor={{ fill: '#262626' }} contentStyle={{ backgroundColor: '#171717', borderColor: '#262626', color: '#fafafa' }} />
                <Bar dataKey="climateChange" fill="#14b8a6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Energy Demand (MJ)</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={mockImpacts}>
                <CartesianGrid strokeDasharray="3 3" stroke="#262626" />
                <XAxis dataKey="stage" stroke="#a3a3a3" fontSize={12} tickFormatter={(val) => val.replace(/([A-Z])/g, ' $1').trim()} />
                <YAxis stroke="#a3a3a3" fontSize={12} />
                <Tooltip cursor={{ fill: '#262626' }} contentStyle={{ backgroundColor: '#171717', borderColor: '#262626', color: '#fafafa' }} />
                <Bar dataKey="energyDemand" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Water Use (m³)</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={mockImpacts}>
                <CartesianGrid strokeDasharray="3 3" stroke="#262626" />
                <XAxis dataKey="stage" stroke="#a3a3a3" fontSize={12} tickFormatter={(val) => val.replace(/([A-Z])/g, ' $1').trim()} />
                <YAxis stroke="#a3a3a3" fontSize={12} />
                <Tooltip cursor={{ fill: '#262626' }} contentStyle={{ backgroundColor: '#171717', borderColor: '#262626', color: '#fafafa' }} />
                <Bar dataKey="waterUse" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Resource Depletion (kg Sb eq)</CardTitle>
          </CardHeader>
          <CardContent className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={mockImpacts}>
                <CartesianGrid strokeDasharray="3 3" stroke="#262626" />
                <XAxis dataKey="stage" stroke="#a3a3a3" fontSize={12} tickFormatter={(val) => val.replace(/([A-Z])/g, ' $1').trim()} />
                <YAxis stroke="#a3a3a3" fontSize={12} />
                <Tooltip cursor={{ fill: '#262626' }} contentStyle={{ backgroundColor: '#171717', borderColor: '#262626', color: '#fafafa' }} />
                <Bar dataKey="resourceDepletion" fill="#f59e0b" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
