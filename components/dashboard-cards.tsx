import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { ArrowUpRight, Users, BookOpen, Calendar, Trophy, Target, GitBranch, CandyCane, Settings, Database, LucideSettings2, NetworkIcon, LoaderCircleIcon } from 'lucide-react';

const DashboardCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      <Card className="p-6 hover:shadow-lg transition-shadow">
        <CardHeader className="p-0">
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-xl mb-2">Website Development</CardTitle>
              <CardDescription>Available courses</CardDescription>
            </div>
            <div className="p-2 bg-purple-100 rounded-lg">
              <BookOpen className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0 mt-4">
          <p className="text-2xl font-bold">12</p>
          <div className="flex items-center mt-2 text-green-600">
            <ArrowUpRight className="w-4 h-4 mr-1" />
            <span>3 new this month</span>
          </div>
        </CardContent>
      </Card>

      <Card className="p-6 hover:shadow-lg transition-shadow">
        <CardHeader className="p-0">
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-xl mb-2">Android Development</CardTitle>
              <CardDescription>Available courses</CardDescription>
            </div>
            <div className="p-2 bg-purple-100 rounded-lg">
              <CandyCane className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0 mt-4">
          <p className="text-2xl font-bold">56</p>
          <div className="flex items-center mt-2 text-green-600">
            <ArrowUpRight className="w-4 h-4 mr-1" />
            <span>11 new this month</span>
          </div>
        </CardContent>
      </Card>

      <Card className="p-6 hover:shadow-lg transition-shadow">
        <CardHeader className="p-0">
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-xl mb-2">IOT</CardTitle>
              <CardDescription>Available courses</CardDescription>
            </div>
            <div className="p-2 bg-purple-100 rounded-lg">
              <NetworkIcon className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0 mt-4">
          <p className="text-2xl font-bold">6</p>
          <div className="flex items-center mt-2 text-green-600">
            <ArrowUpRight className="w-4 h-4 mr-1" />
            <span>1 new this month</span>
          </div>
        </CardContent>
      </Card>

      <Card className="p-6 hover:shadow-lg transition-shadow">
        <CardHeader className="p-0">
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-xl mb-2">Data Science</CardTitle>
              <CardDescription>Available courses</CardDescription>
            </div>
            <div className="p-2 bg-purple-100 rounded-lg">
              <Database className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0 mt-4">
          <p className="text-2xl font-bold">15</p>
          <div className="flex items-center mt-2 text-green-600">
            <ArrowUpRight className="w-4 h-4 mr-1" />
            <span>6 new this month</span>
          </div>
        </CardContent>
      </Card>

      <Card className="p-6 hover:shadow-lg transition-shadow">
        <CardHeader className="p-0">
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-xl mb-2">Machine Learning</CardTitle>
              <CardDescription>Available courses</CardDescription>
            </div>
            <div className="p-2 bg-purple-100 rounded-lg">
              <Settings className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0 mt-4">
          <p className="text-2xl font-bold">35</p>
          <div className="flex items-center mt-2 text-green-600">
            <ArrowUpRight className="w-4 h-4 mr-1" />
            <span>8 new this month</span>
          </div>
        </CardContent>
      </Card>

      <Card className="p-6 hover:shadow-lg transition-shadow">
        <CardHeader className="p-0">
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-xl mb-2">Coming Soon</CardTitle>
              <CardDescription>Coming Soon</CardDescription>
            </div>
            <div className="p-2 bg-purple-100 rounded-lg">
              <LoaderCircleIcon className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0 mt-4">
          <p className="text-2xl font-bold">Coming Soon</p>
          <div className="flex items-center mt-2 text-green-600">
            <LoaderCircleIcon className="w-4 h-4 mr-1" />
            <span>Coming Soon</span>
          </div>
        </CardContent>
      </Card>

      
    </div>
  );
};

export default DashboardCards;