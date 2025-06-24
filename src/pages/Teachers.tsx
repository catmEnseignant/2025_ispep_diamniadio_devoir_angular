import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import Navigation from "@/components/Navigation";
import DataTable from "@/components/DataTable";
import TeacherForm from "@/components/TeacherForm";
import {
  getTeachers,
  addTeacher,
  updateTeacher,
  deleteTeacher,
} from "@/lib/storage";
import { toast } from "sonner";

const Teachers = () => {
  const [teachers, setTeachers] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingTeacher, setEditingTeacher] = useState(null);

  useEffect(() => {
    setTeachers(getTeachers());
  }, []);

  const columns = [
    {
      key: "matricule",
      header: "Matricule",
    },
    {
      key: "nom",
      header: "Nom",
    },
    {
      key: "prenom",
      header: "Prénom",
    },
    {
      key: "telephone",
      header: "Téléphone",
    },
    {
      key: "adresse",
      header: "Adresse",
      render: (value) => (
        <div className="max-w-xs truncate" title={value}>
          {value}
        </div>
      ),
    },
    {
      key: "createdAt",
      header: "Date d'ajout",
      render: (value) => format(value, "dd/MM/yyyy", { locale: fr }),
    },
    {
      key: "actions",
      header: "Actions",
    },
  ];

  const handleAdd = () => {
    setEditingTeacher(null);
    setIsFormOpen(true);
  };

  const handleEdit = (teacher) => {
    setEditingTeacher(teacher);
    setIsFormOpen(true);
  };

  const handleDelete = (teacher) => {
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

  const handleSubmit = (data) => {
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
    <div className="min-h-screen bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white">
      <Navigation />

      <main className="page-container py-12">
        <h1 className="text-4xl font-extrabold mb-8 drop-shadow-lg">Enseignants</h1>

        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-lg p-6 transition-transform hover:scale-105">
          <DataTable
            data={teachers}
            columns={columns}
            searchKey="nom"
            onEdit={handleEdit}
            onDelete={handleDelete}
            onAdd={handleAdd}
            title=""
            searchPlaceholder="Rechercher par nom..."
          />
        </div>

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
