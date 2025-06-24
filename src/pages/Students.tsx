import React, { useState, useEffect } from "react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import Navigation from "@/components/Navigation";
import DataTable from "@/components/DataTable";
import StudentForm from "@/components/StudentForm";
import {
  getStudents,
  addStudent,
  updateStudent,
  deleteStudent,
} from "@/lib/storage";
import { toast } from "sonner";

const Students = () => {
  const [students, setStudents] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);

  useEffect(() => {
    setStudents(getStudents());
  }, []);

  const columns = [
    {
      key: "numero_carte",
      header: "N° Carte",
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
      key: "date_naissance",
      header: "Date de naissance",
      render: (value) => format(value, "dd/MM/yyyy", { locale: fr }),
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
    setEditingStudent(null);
    setIsFormOpen(true);
  };

  const handleEdit = (student) => {
    setEditingStudent(student);
    setIsFormOpen(true);
  };

  const handleDelete = (student) => {
    const success = deleteStudent(student.id);
    if (success) {
      setStudents(getStudents());
      toast.success(
        `L'élève ${student.prenom} ${student.nom} a été supprimé avec succès.`,
      );
    } else {
      toast.error("Erreur lors de la suppression de l'élève.");
    }
  };

  const handleSubmit = (data) => {
    try {
      if (editingStudent) {
        const updated = updateStudent(editingStudent.id, data);
        if (updated) {
          setStudents(getStudents());
          toast.success(
            `L'élève ${data.prenom} ${data.nom} a été modifié avec succès.`,
          );
        } else {
          toast.error("Erreur lors de la modification de l'élève.");
        }
      } else {
        addStudent(data);
        setStudents(getStudents());
        toast.success(
          `L'élève ${data.prenom} ${data.nom} a été ajouté avec succès.`,
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
        <h1 className="text-4xl font-extrabold mb-8 drop-shadow-lg">Élèves</h1>

        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-lg shadow-lg p-6 transition-transform hover:scale-105">
          <DataTable
            data={students}
            columns={columns}
            searchKey="nom"
            onEdit={handleEdit}
            onDelete={handleDelete}
            onAdd={handleAdd}
            title=""
            searchPlaceholder="Rechercher par nom..."
          />
        </div>

        <StudentForm
          open={isFormOpen}
          onClose={() => setIsFormOpen(false)}
          onSubmit={handleSubmit}
          student={editingStudent}
          title={editingStudent ? "Modifier l'élève" : "Ajouter un élève"}
        />
      </main>
    </div>
  );
};

export default Students;
