const dbConnection = require ('../../config/dbConnection');

module.exports = app=>{
    //administracion de Tablas
    const conexion = dbConnection();
    app.get('/administracion_tablas', (req,res)=>{
            res.render('administracion_tablas.ejs', {
            });
    });
    //provincia /////////////////////////////////////////////////////////////////////////
    app.get('/carga', (req,res)=>{
        conexion.query('SELECT * FROM provincias', (err, result)=> {
            res.render('carga.ejs', {
                provincias: result
            });
        });
    
    });
    app.post('/provincias', (req, res)=> {
        const provincia = req.body.provincia;
        
        conexion.query('INSERT INTO provincias SET?', {
            provincia
            },(err,result)=> {
                res.redirect('/carga')
            });
    });

    app.get('/borrar_provincia/:id', (req, res)=> {
        const id=req.params.id; //debe coincidir con el name del select
        const query = 'DELETE FROM provincias WHERE id_provincia=?';
        conexion.query(query,[id],(err, result)=>{
            if(err){
                console.error('Error al borrar el registro:', err);
                res.status(500).send('Error al borrar')
            } else {
                console.log('Registro borrado');
                res.redirect('/carga')
            }
        });
    });

    app.get('/editar_provincia/:id',(req,res)=>{
        const id=req.params.id;
        const query = 'SELECT * FROM provincias WHERE id_provincia =?';
        conexion.query(query,[id], (err, result) => {
            if (err) {
                console.error ('Error al editar registro: ',err)
                res.status(500).send('Error al editar el registro');
            } else {
                console.log('Resgitro editado correctamente');
                res.render('editar_provincias', {
                    provincia: result [0]
                });

            }
        });
    });

    app.post('/editar_provincia/:id',(req,res)=>{
        const id=req.params.id;
        const {provincia}=req.body;
        const query = 'UPDATE provincias SET provincia=? WHERE id_provincia=?';
        conexion.query(query,[provincia, id], (err, result) => {
            if (err) {
                console.error ('Error al editar registro: ',err)
                res.status(500).send('Error al editar el registro');
            } else {
                console.log('Resgitro editado correctamente');
                res.redirect('/carga');
            }
        });
    });

        //categoria //////////////////////////////////////////////////////////////////////////////
        app.get('/categorias', (req,res)=>{
            conexion.query('SELECT * FROM categorias', (err, result)=> {
                res.render('categorias.ejs', {
                    categorias: result
                });
            });
        
        });  
        app.post('/categorias', (req, res)=> {
            const categoria = req.body.categoria;
            
            conexion.query('INSERT INTO categorias SET?', {
                categoria
                },(err,result)=> {
                    res.redirect('/categorias');
                });
        });
        app.get('/borrar_categoria/:id', (req, res)=> {
            const id=req.params.id; //debe coincidir con el name del select
            const query = 'DELETE FROM categorias WHERE id_categoria=?';
            conexion.query(query,[id],(err, result)=>{
                if(err){
                    console.error('Error al borrar el registro:', err);
                    res.status(500).send('Error al borrar')
                } else {
                    console.log('Registro borrado');
                    res.redirect('/categorias')
                }
            });
        });
        app.get('/editar_categoria/:id',(req,res)=>{
            const id=req.params.id;
            const query = 'SELECT * FROM categorias WHERE id_categoria =?';
            conexion.query(query,[id], (err, result) => {
                if (err) {
                    console.error ('Error al editar registro: ',err)
                    res.status(500).send('Error al editar el registro');
                } else {
                    console.log('Resgitro editado correctamente');
                    res.render('editar_categorias', {
                        categoria: result [0]
                    });
    
                }
            });
        });
    
        app.post('/editar_categoria/:id',(req,res)=>{
            const id=req.params.id;
            const {categoria}=req.body;
            const query = 'UPDATE categorias SET categoria=? WHERE id_categoria=?';
            conexion.query(query,[categoria, id], (err, result) => {
                if (err) {
                    console.error ('Error al editar registro: ',err)
                    res.status(500).send('Error al editar el registro');
                } else {
                    console.log('Resgitro editado correctamente');
                    res.redirect('/categorias');
                }
            });
        });

        //genero //////////////////////////////////////////////////////////////////////////////
        app.get('/generos', (req,res)=>{
            conexion.query('SELECT * FROM generos', (err, result)=> {
                res.render('generos.ejs', {
                    generos: result
                });
            });
        
        });  
        app.post('/generos', (req, res)=> {
            const genero = req.body.genero;
            
            conexion.query('INSERT INTO generos SET?', {
                genero
                },(err,result)=> {
                    res.redirect('/generos');
                });
        });
        app.get('/borrar_genero/:id', (req, res)=> {
            const id=req.params.id; //debe coincidir con el name del select
            const query = 'DELETE FROM generos WHERE id_genero=?';
            conexion.query(query,[id],(err, result)=>{
                if(err){
                    console.error('Error al borrar el registro:', err);
                    res.status(500).send('Error al borrar')
                } else {
                    console.log('Registro borrado');
                    res.redirect('/generos')
                }
            });
        });
        app.get('/editar_genero/:id',(req,res)=>{
            const id=req.params.id;
            const query = 'SELECT * FROM generos WHERE id_genero =?';
            conexion.query(query,[id], (err, result) => {
                if (err) {
                    console.error ('Error al editar registro: ',err)
                    res.status(500).send('Error al editar el registro');
                } else {
                    console.log('Resgitro editado correctamente');
                    res.render('editar_generos', {
                        genero: result [0]
                    });
    
                }
            });
        });
    
        app.post('/editar_genero/:id',(req,res)=>{
            const id=req.params.id;
            const {genero}=req.body;
            const query = 'UPDATE generos SET genero=? WHERE id_genero=?';
            conexion.query(query,[genero, id], (err, result) => {
                if (err) {
                    console.error ('Error al editar registro: ',err)
                    res.status(500).send('Error al editar el registro');
                } else {
                    console.log('Resgitro editado correctamente');
                    res.redirect('/generos');
                }
            });
        });

// sociosss ***********************************
app.get ('/socios', (req, res)=> {
    //FROM DE DONDE Y WHERE 
    conexion.query('SELECT * FROM socios INNER JOIN provincias ON socios.id_provincia = provincias.id_provincia INNER JOIN generos ON socios.id_genero = generos.id_genero INNER JOIN categorias ON socios.id_categoria = categorias.id_categoria', (err, result)=>{
        res.render('socios.ejs', {
            socios: result
        }); //envia como respuesta
    });
});

//guarda los datos NUEVOS cargados del fomulario
app.post('/socios', (req, res)=> {
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const fecha_nac = req.body.fecha_nac;
    const id_genero = req.body.id_genero;
    const dni = req.body.dni;
    const direccion = req.body.direccion;
    const localidad = req.body.localidad;
    const id_provincia = req.body.id_provincia;
    const telefono = req.body.telefono;
    const email = req.body.email;
    const fecha_alta = req.body.fecha_alta;
    const id_categoria = req.body.id_categoria;
    
    conexion.query('INSERT INTO socios SET?', {
        nombre,
        apellido,
        fecha_nac,
        id_genero,
        dni,
        direccion,
        localidad,
        id_provincia,
        telefono,
        email,
        fecha_alta,
        id_categoria

        },(err,result)=> {
            res.redirect('/socios');
        }
        )
});

        app.get('/borrar_socio/:id', (req, res)=> {
            const id=req.params.id; //debe coincidir con el name del select
            const query = 'DELETE FROM socios WHERE id_socios=?';
            conexion.query(query,[id],(err, result)=>{
                if(err){
                    console.error('Error al borrar el registro:', err);
                    res.status(500).send('Error al borrar')
                } else {
                    console.log('Registro borrado');
                    res.redirect('/socios')
                }
            });
        });

        app.get('/editar_socio/:id',(req,res)=>{
            const id=req.params.id;
            const query = 'SELECT * FROM socios WHERE id_socios =?';
            conexion.query(query,[id], (err, result) => {
                if (err) {
                    console.error ('Error al editar registro: ',err)
                    res.status(500).send('Error al editar el registro');
                } else {
                    console.log('Resgitro editado correctamente');
                    res.render('editar_socios', {
                        socio: result [0]
                    });
    
                }
            });
        });
    
        app.post('/editar_socio/:id',(req,res)=>{
            const id=req.params.id;
            const {nombre, apellido, fecha_nac, id_genero, dni, direccion, localidad, id_provincia, telefono, email, fecha_alta, id_categoria }=req.body;
            conexion.query('UPDATE socios SET nombre=?, apellido=?, fecha_nac=?, id_genero=?, dni=?, direccion=?, localidad=?, id_provincia=?, telefono=?, email=?, fecha_alta=?, id_categoria=? WHERE id_socios=?',[nombre, apellido, fecha_nac, id_genero, dni, direccion, localidad, id_provincia, telefono, email, fecha_alta, id_categoria , id], (err, result) => {
                if (err) {
                    console.error ('Error al editar registro: ',err)
                    res.status(500).send('Error al editar el registro');
                } else {
                    console.log('Resgitro editado correctamente');
                    res.redirect('/socios');
                }
            });
        });

    
    ///////librossssssssss ***********************

app.get ('/libros', (req, res)=> {
    //FROM DE DONDE Y WHERE 
    conexion.query('SELECT * FROM libros', (err, result)=>{
        res.render('libros.ejs', {
            libros: result
        }); //envia como respuesta
    });
});

//guarda los datos NUEVOS cargados del fomulario
app.post('/libros', (req, res)=> {
    const titulo = req.body.titulo;
    const autor = req.body.autor;
    const editorial = req.body.editorial;
    const genero_lit = req.body.genero_lit;
    
    conexion.query('INSERT INTO libros SET?', {
        titulo,
        autor,
        editorial,
        genero_lit

        },(err,result)=> {
            res.redirect('/libros');
        }
        )
});

app.get('/borrar_libro/:id', (req, res)=> {
    const id=req.params.id; //debe coincidir con el name del select
    const query = 'DELETE FROM libros WHERE id_libro=?';
    conexion.query(query,[id],(err, result)=>{
        if(err){
            console.error('Error al borrar el registro:', err);
            res.status(500).send('Error al borrar')
        } else {
            console.log('Registro borrado');
            res.redirect('/libros')
        }
    });
});

app.get('/editar_libro/:id',(req,res)=>{
    const id=req.params.id;
    const query = 'SELECT * FROM libros WHERE id_libro =?';
    conexion.query(query,[id], (err, result) => {
        if (err) {
            console.error ('Error al editar registro: ',err)
            res.status(500).send('Error al editar el registro');
        } else {
            console.log('Resgitro editado correctamente');
            res.render('editar_libros', {
                libro: result [0]
            });

        }
    });
});

app.post('/editar_libro/:id',(req,res)=>{
    const id=req.params.id;
    const {titulo, autor, editorial, genero_lit }=req.body;
    conexion.query('UPDATE libros SET titulo=?, autor=?, editorial=?, genero_lit=? WHERE id_libro=?',[titulo, autor, editorial, genero_lit, id], (err, result) => {
        if (err) {
            console.error ('Error al editar registro: ',err)
            res.status(500).send('Error al editar el registro');
        } else {
            console.log('Resgitro editado correctamente');
            res.redirect('/libros');
        }
    });
});


    ///////prestamos ***********************

    app.get ('/prestamos', (req, res)=> {
        //FROM DE DONDE Y WHERE 
        conexion.query('SELECT * FROM prestamos INNER JOIN libros ON prestamos.id_libro = libros.id_libro INNER JOIN socios ON prestamos.id_socios = socios.id_socios INNER JOIN estado ON prestamos.id_estado = estado.id_estado', (err, result)=>{
            res.render('prestamos.ejs', {
                prestamos: result
            }); //envia como respuesta
        });
    });
    
    //guarda los datos NUEVOS cargados del fomulario
    app.post('/prestamos', (req, res)=> {
        const id_libro = req.body.id_libro;
        const id_socios = req.body.id_socios;
        const fecha_ret = req.body.fecha_ret;
        const fecha_dev = req.body.fecha_dev;
        const id_estado = req.body.id_estado;
        
        conexion.query('INSERT INTO prestamos SET?', {
            id_libro,
            id_socios,
            fecha_ret,
            fecha_dev,
            id_estado,
    
            },(err,result)=> {
                res.redirect('/prestamos');
            }
            )
    });

    app.get('/editar_prestamo/:id',(req,res)=>{
        const id=req.params.id;
        const query = 'SELECT * FROM prestamos WHERE id_prestamo =?';
        conexion.query(query,[id], (err, result) => {
            if (err) {
                console.error ('Error al editar registro: ',err)
                res.status(500).send('Error al editar el registro');
            } else {
                console.log('Resgitro editado correctamente');
                res.render('editar_prestamos', {
                    prestamo: result [0]
                });
    
            }
        });
    });
    
    app.post('/editar_prestamo/:id',(req,res)=>{
        const id=req.params.id;
        const {id_libro, id_socios, fecha_ret, fecha_dev }=req.body;
        conexion.query('UPDATE prestamos SET id_libro=?, id_socios=?, fecha_ret=?, fecha_dev=? WHERE id_prestamo=?',[id_libro, id_socios, fecha_ret, fecha_dev, id], (err, result) => {
            if (err) {
                console.error ('Error al editar registro: ',err)
                res.status(500).send('Error al editar el registro');
            } else {
                console.log('Resgitro editado correctamente');
                res.redirect('/prestamos');
            }
        });
    });

    app.get('/cambiar_estado/:id',(req,res)=>{
        const id=req.params.id;
        const query = 'SELECT * FROM prestamos WHERE id_prestamo =?';
        conexion.query(query,[id], (err, result) => {
            if (err) {
                console.error ('Error al editar registro: ',err)
                res.status(500).send('Error al editar el registro');
            } else {
                console.log('Resgitro editado correctamente');
                res.render('cambia_estado', {
                    prestamo: result [0]
                });
    
            }
        });
    });
    
    app.post('/cambiar_estado/:id',(req,res)=>{
        const id=req.params.id;
        const {id_estado}=req.body;
        conexion.query('UPDATE prestamos SET id_estado=? WHERE id_prestamo=?',[id_estado, id], (err, result) => {
            if (err) {
                console.error ('Error al editar registro: ',err)
                res.status(500).send('Error al editar el registro');
            } else {
                console.log('Resgitro editado correctamente');
                res.redirect('/prestamos');
            }
        });
    });













    //CLIENTES
    app.get ('/', (req, res)=> {
    //FROM DE DONDE Y WHERE 
    conexion.query('SELECT * FROM clientes', (err, result)=>{
        res.render('clientes.ejs', {
            clientes: result
        }); //envia como respuesta
    });
});
//guarda los datos NUEVOS cargados del fomulario
app.post('/clientes', (req, res)=> {
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    
    conexion.query('INSERT INTO clientes SET?', {
        nombre,
        apellido
        },(err,result)=> {
            res.redirect('/');
        }
        )
});
//elimina datos seleccionado del fomulario
app.post('/borrar', (req, res)=> {
    const id=req.body.registroId; //debe coincidir con el name del select
    const query = 'DELETE FROM clientes WHERE id_clientes=?';
    conexion.query(query,[id],(err, result)=>{
        if(err){
            console.error('Error al borrar el registro:', err);
            res.status(500).send('Error al borrar')
        } else {
            console.log('Registro borrado');
            res.redirect('/')
        }
    });
});
//edita los registros
app.post('/editar',(req,res)=>{
    const id=req.body.registroId;
    const {nombre, apellido}=req.body;
    const query = 'UPDATE clientes SET nombre=?, apellido=? WHERE id_clientes=?';
    conexion.query(query,[nombre, apellido,id], (err, result) => {
        if (err) {
            console.error ('Error al editar registro: ',err)
            res.status(500).send('Error al editar el registro');
        } else {
            console.log('Resgitro editado correctamente');
            res.redirect('/');
        }
    });
});
}

