const express = require('express');
const { getUserRoleByEmail,
   getUserIdByEmail,
   getUserFirstNmaeByEmail,
   getUserLastNmaeByEmail,
   getBioByEmail,
   getCoordinatesByEmail,
   getUsersByCategory,
   getReceiveProficientRequestByEmail,
   getSentProficientRequestByEmail,
   getUserByEmail,
   getUserById,
   updateImage,
   updateInfo,
   checkIfUserRated,
   getAllUsers,
   updateCertificateFile,
   verifyCertificate,
   rejectCertificate,

  } = require('../controllers/getPersonInformation'); 
const router = express.Router();


router.post('/role', getUserRoleByEmail);
router.post('/id', getUserIdByEmail);
router.post('/firstName', getUserFirstNmaeByEmail);
router.post('/lastName', getUserLastNmaeByEmail);
router.post('/bio', getBioByEmail);
router.post('/coordinates', getCoordinatesByEmail);
router.post('/users',getUsersByCategory);
router.post('/ReceiveProficient',getReceiveProficientRequestByEmail);
router.post('/SentProficient',getSentProficientRequestByEmail);
router.post('/user',getUserByEmail);
router.post('/isUserRated',checkIfUserRated);
router.post('/update-certificate',updateCertificateFile);
router.post('/verify-certificate',verifyCertificate);
router.post('/reject-certificate',rejectCertificate);
router.get('/userId/:id',getUserById);
router.get('/Allusers',getAllUsers);
router.put('/changeImage',updateImage);
router.put('/updateInfo/:userId',updateInfo);

  module.exports = router;