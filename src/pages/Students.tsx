import { useState, useEffect } from "react";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import Navigation from "@/components/Navigation";
import DataTable from "@/components/DataTable";
import StudentForm from "@/components/StudentForm";
import { Student, StudentFormData } from "@/lib/types";
import {
  getStudents,
  addStudent,
  updateStudent,
  deleteStudent,
} from "@/lib/storage";
import { toast } from "sonner";

const Students = () => {
  const [students, setStudents] = useState<Student[]>([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingStudent, setEditingStudent] = useState<Student | null>(null);

  useEffect(() => {
    setStudents(getStudents());
  }, []);

  const columns = [
    {
      key: "numero_carte" as keyof Student,
      header: "N° Carte",
    },
    {
      key: "nom" as keyof Student,
      header: "Nom",
    },
    {
      key: "prenom" as keyof Student,
      header: "Prénom",
    },
    {
      key: "date_naissance" as keyof Student,
      header: "Date de naissance",
      render: (value: Date) => format(value, "dd/MM/yyyy", { locale: fr }),
    },
    {
      key: "telephone" as keyof Student,
      header: "Téléphone",
    },
    {
      key: "adresse" as keyof Student,
      header: "Adresse",
      render: (value: string) => (
        <div className="max-w-xs truncate" title={value}>
          {value}
        </div>
      ),
    },
    {
      key: "createdAt" as keyof Student,
      header: "Date d'ajout",
      render: (value: Date) => format(value, "dd/MM/yyyy", { locale: fr }),
    },
    {
      key: "actions" as const,
      header: "Actions",
    },
  ];

  const handleAdd = () => {
    setEditingStudent(null);
    setIsFormOpen(true);
  };

  const handleEdit = (student: Student) => {
    setEditingStudent(student);
    setIsFormOpen(true);
  };

  const handleDelete = (student: Student) => {
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

  const handleSubmit = (data: StudentFormData) => {
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
    <div className="min-h-screen bg-background">
      <Navigation />

      <main className="page-container">
        <DataTable
          data={students}
          columns={columns}
          searchKey="nom"
          onEdit={handleEdit}
          onDelete={handleDelete}
          onAdd={handleAdd}
          title="Élèves"
          searchPlaceholder="Rechercher par nom..."
        />

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
