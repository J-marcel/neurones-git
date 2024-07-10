/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import * as React from 'react';
import { useState, useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { Box, Button, Divider, Stack, Typography } from '@mui/material';
import {db} from '../../component/Firebase/FirebaseConfig';
import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    deleteDoc,
    doc,
} from "firebase/firestore";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Modal from '@mui/material/Modal';



export default function EtudiantList() {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const empCollectionRef = collection(db, "Etudiants");
    const [rows, setRows] = useState([]);

    useEffect(() => {
        getUsers();
    
    }, []);

    const getUsers = async () => {
        const data = await getDocs(empCollectionRef);
        setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
const getStatusText = (status) => {
    return status === 0 ? 'Désactiver' : 'Activer';
};
const getStatusStyle = (status) => {
    return {
        color: status === 0 ? 'red' : 'green',
        fontWeight: 'bold',
    };
};

const deleteUser = (id) => {
    Swal.fire({
        title: "Êtes-vous sûr ?",
        text: "Il n'est pas possible de revenir en arrière !",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Oui, supprimez-le !",
    }).then((result) => {
        if (result.value) {
            deleteApi(id);
        }
    });
};
const deleteApi = async (id) => {
    const userDoc = doc(db, "Etudiants", id);
    await deleteDoc(userDoc);
    Swal.fire("Supprimé !", "Votre fichier a été supprimé", "succès");
    getUsers();
};

    const filterData = (v) => {
        if (v) {
            setRows([v]);
        } else {
            setRows([]);
            getUsers();
        }
    }




    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>

            <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ padding: "20px" }}
            >
                Listes des Etudiants
            </Typography>
            <Divider />
            <Box height={10} />
            <Stack direction="row" spacing={2} className="my-2 mb-2">
                <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={rows}
                    sx={{ width: 300 }}
                    onChange={(e, v) => filterData(v)}
                    getOptionLabel={(rows) => rows.name || ""}
                    renderInput={(params) => (
                        <TextField {...params} size="small" label="Search Products" />
                    )}
                />
                <Typography
                    variant="h6"
                    component="div"
                    sx={{ flexGrow: 1 }}
                ></Typography>
                <Button variant="contained" endIcon={<AddCircleIcon/>}>
                    Ajouter
                </Button>
            </Stack>
            <Box height={10} />
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            <TableCell

                                align="left"
                                style={{ minWidth: "100px" }}
                            >
                                Nom
                            </TableCell>
                            <TableCell

                                align="left"
                                style={{ minWidth: "100px" }}
                            >
                                E-mail
                            </TableCell>
                            <TableCell

                                align="left"
                                style={{ minWidth: "100px" }}
                            >
                                Téléphone
                            </TableCell>
                            <TableCell

                                align="left"
                                style={{ minWidth: "100px" }}
                            >
                                Pays
                            </TableCell>
                            <TableCell

                                align="left"
                                style={{ minWidth: "100px" }}
                            >
                                Ville
                            </TableCell>
                            <TableCell

                                align="left"
                                style={{ minWidth: "100px" }}
                            >
                                Date d'inscription
                            </TableCell>
                            <TableCell

                                align="left"
                                style={{ minWidth: "100px" }}
                            >
                                Status
                            </TableCell>
                            <TableCell

                                align="left"
                                style={{ minWidth: "100px" }}
                            >
                                Action
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1}>

                                        <TableCell key={row.id} align="left">
                                            {row.name}
                                        </TableCell>
                                        <TableCell key={row.id} align="left">
                                            {row.email}
                                        </TableCell>
                                        <TableCell key={row.id} align="left">
                                            {row.phone}
                                        </TableCell>
                                        <TableCell key={row.id} align="left">
                                            {row.country}
                                        </TableCell>
                                        <TableCell key={row.id} align="left">
                                            {row.city}
                                        </TableCell>
                                        <TableCell key={row.id} align="left">
                                            {row.date}
                                        </TableCell>
                                        <TableCell key={row.id} align="left">
                                            <span style={getStatusStyle(row.status)}>
                                                {getStatusText(row.status)}
                                            </span>
                                        </TableCell>
                                        <TableCell align="left">
                                            <Stack spacing={2} direction="row">
                                                <EditIcon
                                                    style={{
                                                        fontSize: "20px",
                                                        color: "blue",
                                                        cursor: "pointer",
                                                    }}
                                                    className="cursor-pointer"
                                                // onClick={() => editUser(row.id)}
                                                />
                                                <DeleteIcon
                                                    style={{
                                                        fontSize: "20px",
                                                        color: "darkred",
                                                        cursor: "pointer",
                                                    }}
                                                    onClick={() => {
                                                        deleteUser(row.id);
                                                    }}
                                                />
                                            </Stack>
                                        </TableCell>

                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
