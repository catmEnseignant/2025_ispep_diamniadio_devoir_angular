import { useState, useEffect } from "react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import Navigation from "@/components/Navigation";
import DataTable from "@/components/DataTable";
import TeacherForm from "@/components/TeacherForm";
import { Teacher, TeacherFormData } from "@/lib/types";
import {
  getTeachers,
  addTeacher,
  updateTeacher,
  deleteTeacher,
} from "@/lib/storage";
import { toast } from "sonner";

const Teachers = () => {
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingTeacher, setEditingTeacher] = useState<Teacher | null>(null);

  useEffect(() => {
    setTeachers(getTeachers());
  }, []);

  const columns = [
    {
      key: "matricule" as keyof Teacher,
      header: "Matricule",
    },
    {
      key: "nom" as keyof Teacher,
      header: "Nom",
    },
    {
      key: "prenom" as keyof Teacher,
      header: "Prénom",
    },
    {
      key: "telephone" as keyof Teacher,
      header: "Téléphone",
    },
    {
      key: "adresse" as keyof Teacher,
      header: "Adresse",
      render: (value: string) => (
        <div className="max-w-xs truncate" title={value}>
          {value}
        </div>
      ),
    },
    {
      key: "createdAt" as keyof Teacher,
      header: "Date d'ajout",
      render: (value: Date) => format(value, "dd/MM/yyyy", { locale: fr }),
    },
    {
      key: "actions" as const,
      header: "Actions",
    },
  ];

  const handleAdd = () => {
    setEditingTeacher(null);
    setIsFormOpen(true);
  };

  const handleEdit = (teacher: Teacher) => {
    setEditingTeacher(teacher);
    setIsFormOpen(true);
  };

  const handleDelete = (teacher: Teacher) => {
    const success = deleteTeacher(teacher.id);
    if (success) {
      setTeachers(getTeachers());
      toast.success(
        `L'enseignant ${teacher.prenom} ${teacher.nom} a été supprimé avec succès.`,
      );
    } else {
      toast.error("Erreur lors de la suppression de l'enseignant.");
    }
  };

  const handleSubmit = (data: TeacherFormData) => {
    try {
      if (editingTeacher) {
        const updated = updateTeacher(editingTeacher.id, data);
        if (updated) {
          setTeachers(getTeachers());
          toast.success(
            `L'enseignant ${data.prenom} ${data.nom} a été modifié avec succès.`,
          );
        } else {
          toast.error("Erreur lors de la modification de l'enseignant.");
        }
      } else {
        addTeacher(data);
        setTeachers(getTeachers());
        toast.success(
          `L'enseignant ${data.prenom} ${data.nom} a été ajouté avec succès.`,
        );
      }
    } catch (error) {
      toast.error("Une erreur s'est produite. Veuillez réessayer.");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="page-container">
        <DataTable
          data={teachers}
          columns={columns}
          searchKey="nom"
          onEdit={handleEdit}
          onDelete={handleDelete}
          onAdd={handleAdd}
          title="Enseignants"
          searchPlaceholder="Rechercher par nom..."
        />

        <TeacherForm
          open={isFormOpen}
          onClose={() => setIsFormOpen(false)}
          onSubmit={handleSubmit}
          teacher={editingTeacher}
          title={
            editingTeacher ? "Modifier l'enseignant" : "Ajouter un enseignant"
          }
        />
      </main>
    </div>
  );
};

export default Teachers;
