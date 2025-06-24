import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import { getTeachers, getStudents } from "@/lib/storage";
import { initializeSampleData } from "@/lib/sampleData";
import { Users, GraduationCap, BookOpen, Calendar, Plus } from "lucide-react";

const Index = () => {
  useEffect(() => {
    initializeSampleData();
  }, []);

  const teachers = getTeachers();
  const students = getStudents();

  const stats = [
    {
      title: "Enseignants",
      value: teachers.length,
      icon: Users,
      color: "bg-blue-600",
      href: "/enseignants",
    },
    {
      title: "Élèves",
      value: students.length,
      icon: GraduationCap,
      color: "bg-green-600",
      href: "/eleves",
    },
    {
      title: "Classes",
      value: 12,
      icon: BookOpen,
      color: "bg-purple-600",
      href: "#",
    },
    {
      title: "Année Scolaire",
      value: "2024-2025",
      icon: Calendar,
      color: "bg-orange-600",
      href: "#",
    },
  ];

  const recentTeachers = teachers.slice(-3);
  const recentStudents = students.slice(-3);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white">
        <Navigation />

        <main className="page-container py-12">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl font-extrabold tracking-wide mb-4 drop-shadow-lg">
              Institut Supérieur d'Enseignement Professionnel
            </h1>
            <p className="text-2xl mb-6 drop-shadow-md">
              ISEP Diamnadio - Année Scolaire 2024-2025
            </p>
            <Badge variant="secondary" className="text-lg mx-auto px-6 py-2 rounded-full bg-white/20 text-white">
              Bienvenue à l'ISEP Diamnadio
            </Badge>
          </section>

          {/* Statistics Cards */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <Card
                  key={stat.title}
                  className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 hover:scale-105 transform transition duration-500 ease-in-out shadow-lg"
                >
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-base font-semibold text-white/90">
                      {stat.title}
                    </CardTitle>
                    <div className={`p-3 rounded-md ${stat.color} shadow-lg`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-extrabold text-white mb-3">
                      {stat.value}
                    </div>
                    {stat.href !== "#" && (
                      <Link to={stat.href}>
                        <Button variant="outline" size="sm" className="w-full text-white border-white hover:bg-white/30">
                          Voir tout
                        </Button>
                      </Link>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </section>

          {/* Recent Activity */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16">
            {/* Recent Teachers */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 hover:scale-105 transform transition duration-500 ease-in-out shadow-lg">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-3 text-white">
                  <Users className="h-6 w-6" />
                  Enseignants Récents
                </CardTitle>
                <Link to="/enseignants">
                  <Button variant="outline" size="sm" className="text-white border-white hover:bg-white/30">
                    <Plus className="h-4 w-4 mr-2" />
                    Ajouter
                  </Button>
                </Link>
              </CardHeader>
              <CardContent>
                {recentTeachers.length > 0 ? (
                  <div className="space-y-4">
                    {recentTeachers.map((teacher) => (
                      <div
                        key={teacher.id}
                        className="flex items-center justify-between p-4 bg-white/20 rounded-lg shadow-md"
                      >
                        <div>
                          <p className="font-semibold text-white">
                            {teacher.prenom} {teacher.nom}
                          </p>
                          <p className="text-sm text-white/80">
                            {teacher.matricule}
                          </p>
                        </div>
                        <Badge variant="secondary" className="bg-white/30 text-white">
                          Enseignant
                        </Badge>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-10 text-white/70">
                    <Users className="h-14 w-14 mx-auto mb-5 opacity-60" />
                    <p>Aucun enseignant enregistré</p>
                    <Link to="/enseignants">
                      <Button className="mt-5 text-white border-white hover:bg-white/30">
                        <Plus className="h-4 w-4 mr-2" />
                        Ajouter le premier enseignant
                      </Button>
                    </Link>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Recent Students */}
            <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 hover:scale-105 transform transition duration-500 ease-in-out shadow-lg">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="flex items-center gap-3 text-white">
                  <GraduationCap className="h-6 w-6" />
                  Élèves Récents
                </CardTitle>
                <Link to="/eleves">
                  <Button variant="outline" size="sm" className="text-white border-white hover:bg-white/30">
                    <Plus className="h-4 w-4 mr-2" />
                    Ajouter
                  </Button>
                </Link>
              </CardHeader>
              <CardContent>
                {recentStudents.length > 0 ? (
                  <div className="space-y-4">
                    {recentStudents.map((student) => (
                      <div
                        key={student.id}
                        className="flex items-center justify-between p-4 bg-white/20 rounded-lg shadow-md"
                      >
                        <div>
                          <p className="font-semibold text-white">
                            {student.prenom} {student.nom}
                          </p>
                          <p className="text-sm text-white/80">
                            {student.numero_carte}
                          </p>
                        </div>
                        <Badge variant="secondary" className="bg-white/30 text-white">
                          Élève
                        </Badge>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-10 text-white/70">
                    <GraduationCap className="h-14 w-14 mx-auto mb-5 opacity-60" />
                    <p>Aucun élève enregistré</p>
                    <Link to="/eleves">
                      <Button className="mt-5 text-white border-white hover:bg-white/30">
                        <Plus className="h-4 w-4 mr-2" />
                        Ajouter le premier élève
                      </Button>
                    </Link>
                  </div>
                )}
              </CardContent>
            </Card>
          </section>

          {/* Quick Actions */}
          <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/20 hover:scale-105 transform transition duration-500 ease-in-out shadow-lg">
            <CardHeader>
              <CardTitle className="text-white">Actions Rapides</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <Link to="/enseignants">
                  <Button
                    variant="outline"
                    className="w-full h-20 flex-col gap-2 text-white border-white hover:bg-white/30"
                  >
                    <Users className="h-6 w-6" />
                    Gérer les Enseignants
                  </Button>
                </Link>
                <Link to="/eleves">
                  <Button
                    variant="outline"
                    className="w-full h-20 flex-col gap-2 text-white border-white hover:bg-white/30"
                  >
                    <GraduationCap className="h-6 w-6" />
                    Gérer les Élèves
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  className="w-full h-20 flex-col gap-2 text-white border-white"
                  disabled
                >
                  <BookOpen className="h-6 w-6" />
                  Classes (Bientôt)
                </Button>
                <Button
                  variant="outline"
                  className="w-full h-20 flex-col gap-2 text-white border-white"
                  disabled
                >
                  <Calendar className="h-6 w-6" />
                  Planning (Bientôt)
                </Button>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </>
  );
};

export default Index;
