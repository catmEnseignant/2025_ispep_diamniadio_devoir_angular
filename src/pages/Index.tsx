import { useEffect } from "react";
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
      color: "bg-blue-500",
      href: "/enseignants",
    },
    {
      title: "Élèves",
      value: students.length,
      icon: GraduationCap,
      color: "bg-green-500",
      href: "/eleves",
    },
    {
      title: "Classes",
      value: 12,
      icon: BookOpen,
      color: "bg-purple-500",
      href: "#",
    },
    {
      title: "Année Scolaire",
      value: "2024-2025",
      icon: Calendar,
      color: "bg-orange-500",
      href: "#",
    },
  ];

  const recentTeachers = teachers.slice(-3);
  const recentStudents = students.slice(-3);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="page-container">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-foreground mb-4">
            Institut Supérieur d'Enseignement Professionnel
          </h1>
          <p className="text-xl text-muted-foreground mb-2">ISEP Diamnadio</p>
          <Badge variant="secondary" className="text-sm">
            Année Scolaire 2024-2025
          </Badge>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <Card
                key={stat.title}
                className="hover:shadow-md transition-shadow"
              >
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-muted-foreground">
                    {stat.title}
                  </CardTitle>
                  <div className={`p-2 rounded-md ${stat.color}`}>
                    <Icon className="h-4 w-4 text-white" />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-foreground mb-2">
                    {stat.value}
                  </div>
                  {stat.href !== "#" && (
                    <Link to={stat.href}>
                      <Button variant="outline" size="sm" className="w-full">
                        Voir tout
                      </Button>
                    </Link>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Recent Teachers */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Enseignants Récents
              </CardTitle>
              <Link to="/enseignants">
                <Button variant="outline" size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Ajouter
                </Button>
              </Link>
            </CardHeader>
            <CardContent>
              {recentTeachers.length > 0 ? (
                <div className="space-y-3">
                  {recentTeachers.map((teacher) => (
                    <div
                      key={teacher.id}
                      className="flex items-center justify-between p-3 bg-muted/50 rounded-lg"
                    >
                      <div>
                        <p className="font-medium">
                          {teacher.prenom} {teacher.nom}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {teacher.matricule}
                        </p>
                      </div>
                      <Badge variant="secondary">Enseignant</Badge>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <Users className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Aucun enseignant enregistré</p>
                  <Link to="/enseignants">
                    <Button className="mt-4">
                      <Plus className="h-4 w-4 mr-2" />
                      Ajouter le premier enseignant
                    </Button>
                  </Link>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Recent Students */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5" />
                Élèves Récents
              </CardTitle>
              <Link to="/eleves">
                <Button variant="outline" size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Ajouter
                </Button>
              </Link>
            </CardHeader>
            <CardContent>
              {recentStudents.length > 0 ? (
                <div className="space-y-3">
                  {recentStudents.map((student) => (
                    <div
                      key={student.id}
                      className="flex items-center justify-between p-3 bg-muted/50 rounded-lg"
                    >
                      <div>
                        <p className="font-medium">
                          {student.prenom} {student.nom}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {student.numero_carte}
                        </p>
                      </div>
                      <Badge variant="secondary">Élève</Badge>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  <GraduationCap className="h-12 w-12 mx-auto mb-4 opacity-50" />
                  <p>Aucun élève enregistré</p>
                  <Link to="/eleves">
                    <Button className="mt-4">
                      <Plus className="h-4 w-4 mr-2" />
                      Ajouter le premier élève
                    </Button>
                  </Link>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Actions Rapides</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <Link to="/enseignants">
                <Button
                  variant="outline"
                  className="w-full h-20 flex-col gap-2"
                >
                  <Users className="h-6 w-6" />
                  Gérer les Enseignants
                </Button>
              </Link>
              <Link to="/eleves">
                <Button
                  variant="outline"
                  className="w-full h-20 flex-col gap-2"
                >
                  <GraduationCap className="h-6 w-6" />
                  Gérer les Élèves
                </Button>
              </Link>
              <Button
                variant="outline"
                className="w-full h-20 flex-col gap-2"
                disabled
              >
                <BookOpen className="h-6 w-6" />
                Classes (Bientôt)
              </Button>
              <Button
                variant="outline"
                className="w-full h-20 flex-col gap-2"
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
  );
};

export default Index;
