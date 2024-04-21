import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DraweritemsService {
  allowedServicesList: any=[
    {
        displayName: "Aadhaar Verification",
        link: "/aadhaarVerification",
        menuIcon: "fingerprint", // Angular Material Icon for fingerprint
        dashboardIcon: 'static/verificationIcon.png',
        dashboardColor: 'small-box bg3',
    },
    {
        displayName: "PAN Verification",
        link: "/panVerification",
        menuIcon: "credit_card", // Angular Material Icon for credit card
        dashboardIcon: 'static/verificationIcon.png',
        dashboardColor: 'small-box bg3',
    },
    {
        displayName: "PAN Verification Detailed",
        link: "/panVerificationDetailed",
        menuIcon: "credit_card", // Angular Material Icon for credit card
        dashboardIcon: 'static/verificationIcon.png',
        dashboardColor: 'small-box bg3',
    },
    {
        displayName: "Driving License Verification",
        link: "/drivingLicenseVerification",
        menuIcon: "drive_eta", // Angular Material Icon for car
        dashboardIcon: 'static/verificationIcon.png',
        dashboardColor: 'small-box bg3',
    },
    {
        displayName: "Voter ID Verification",
        link: "/voterIDVerification",
        menuIcon: "how_to_vote", // Angular Material Icon for voting
        dashboardIcon: 'static/verificationIcon.png',
        dashboardColor: 'small-box bg3',
    },
    {
        displayName: "Passport Verification",
        link: "/passportVerification",
        menuIcon: "flight", // Angular Material Icon for flight
        dashboardIcon: 'static/verificationIcon.png',
        dashboardColor: 'small-box bg3',
    },
    {
        displayName: "FSSAI Verification",
        link: "/fssaiVerification",
        menuIcon: "restaurant_menu", // Angular Material Icon for restaurant
        dashboardIcon: 'static/verificationIcon.png',
        dashboardColor: 'small-box bg3',
    },
    {
        displayName: "IEC Verification",
        link: "/iecVerification",
        menuIcon: "domain_verification", // Angular Material Icon for domain verification
        dashboardIcon: 'static/verificationIcon.png',
        dashboardColor: 'small-box bg3',
    },
    {
        displayName: "MCA (CIN/DIN) Verification",
        link: "/mcaVerification",
        menuIcon: "description", // Angular Material Icon for description
        dashboardIcon: 'static/verificationIcon.png',
        dashboardColor: 'small-box bg3',
    },
    {
        displayName: "GST Verification",
        link: "/gstVerification",
        menuIcon: "account_balance", // Angular Material Icon for account balance
        dashboardIcon: 'static/verificationIcon.png',
        dashboardColor: 'small-box bg3',
    },
    {
        displayName: "Udhyam Aadhaar",
        link: "/udhyamAadhaar",
        menuIcon: "business", // Angular Material Icon for business
        dashboardIcon: 'static/verificationIcon.png',
        dashboardColor: 'small-box bg3',
    },
    {
        displayName: "TAN Verification",
        link: "/tanVerification",
        menuIcon: "contacts", // Angular Material Icon for contacts
        dashboardIcon: 'static/verificationIcon.png',
        dashboardColor: 'small-box bg3',
    },
    {
        displayName: "LEI Verification",
        link: "/leiVerification",
        menuIcon: "assignment_ind", // Angular Material Icon for assignment_ind (person)
        dashboardIcon: 'static/verificationIcon.png',
        dashboardColor: 'small-box bg3',
    },
    {
        displayName: "Shop and Establishment Act",
        link: "/shopEstablishmentVerification",
        menuIcon: "store", // Angular Material Icon for store
        dashboardIcon: 'static/verificationIcon.png',
        dashboardColor: 'small-box bg3',
    },
    {
        displayName: "RC Verification",
        link: "/rcVerification",
        menuIcon: "directions_car", // Angular Material Icon for directions_car
        dashboardIcon: 'static/verificationIcon.png',
        dashboardColor: 'small-box bg3',
    },
    {
        displayName: "Bank Account Verification",
        link: "/bankAccountVerification",
        menuIcon: "account_balance_wallet", // Angular Material Icon for account_balance_wallet
        dashboardIcon: 'static/verificationIcon.png',
        dashboardColor: 'small-box bg3',
    },
    {
        displayName: "Email Authentication",
        link: "/emailAuthentication",
        menuIcon: "email", // Angular Material Icon for email
        dashboardIcon: 'static/verificationIcon.png',
        dashboardColor: 'small-box bg3',
    },
    {
        displayName: "ITR Compliance Check",
        link: "/itrComplianceCheck",
        menuIcon: "assignment", // Angular Material Icon for assignment
        dashboardIcon: 'static/verificationIcon.png',
        dashboardColor: 'small-box bg3',
    },
    {
        displayName: "ITR Details Get",
        link: "/itrDetailsGet",
        menuIcon: "assignment_turned_in", // Angular Material Icon for assignment_turned_in
        dashboardIcon: 'static/verificationIcon.png',
        dashboardColor: 'small-box bg3',
    },
    {
        displayName: "26AS Detail Fetch",
        link: "/26asDetailFetch",
        menuIcon: "insert_drive_file", // Angular Material Icon for insert_drive_file
        dashboardIcon: 'static/verificationIcon.png',
        dashboardColor: 'small-box bg3',
    },
    {
        displayName: "CIBIL",
        link: "/cibilVerification",
        menuIcon: "credit_score", // Angular Material Icon for credit_score
        dashboardIcon: 'static/verificationIcon.png',
        dashboardColor: 'small-box bg3',
    },
    {
        displayName: "CKYC Search",
        link: "/ckycSearch",
        menuIcon: "search", // Angular Material Icon for search
        dashboardIcon: 'static/verificationIcon.png',
        dashboardColor: 'small-box bg3',
    },
    {
        displayName: "CKYC Download",
        link: "/ckycDownload",
        menuIcon: "cloud_download", // Angular Material Icon for cloud_download
        dashboardIcon: 'static/verificationIcon.png',
        dashboardColor: 'small-box bg3',
    },
    {
        displayName: "Face Match",
        link: "/faceMatch",
        menuIcon: "face", // Angular Material Icon for face
        dashboardIcon: 'static/verificationIcon.png',
        dashboardColor: 'small-box bg3',
    },
    {
        displayName: "EPFO Details Get",
        link: "/epfoDetailsGet",
        menuIcon: "account_circle", // Angular Material Icon for account_circle
        dashboardIcon: 'static/verificationIcon.png',
        dashboardColor: 'small-box bg3',
    },
    {
        displayName: "Aadhaar OCR",
        link: "/aadhaarOCR",
        menuIcon: "crop_free", // Angular Material Icon for crop_free
        dashboardIcon: 'static/verificationIcon.png',
        dashboardColor: 'small-box bg3',
    },
    {
        displayName: "PAN OCR",
        link: "/panOCR",
        menuIcon: "credit_card", // Angular Material Icon for credit_card
        dashboardIcon: 'static/verificationIcon.png',
        dashboardColor: 'small-box bg3',
    },
    {
        displayName: "License OCR",
        link: "/licenseOCR",
        menuIcon: "assignment", // Angular Material Icon for assignment
        dashboardIcon: 'static/verificationIcon.png',
        dashboardColor: 'small-box bg3',
    },
    {
        displayName: "Whatsapp Verification",
        link: "/whatsappVerification",
        menuIcon: "chat", // Angular Material Icon for chat
        dashboardIcon: 'static/verificationIcon.png',
        dashboardColor: 'small-box bg3',
    },
    {
        displayName: "Passport OCR",
        link: "/passportOCR",
        menuIcon: "flight", // Angular Material Icon for flight
        dashboardIcon: 'static/verificationIcon.png',
        dashboardColor: 'small-box bg3',
    },
    {
        displayName: "Cheque OCR",
        link: "/chequeOCR",
        menuIcon: "attach_money", // Angular Material Icon for attach_money
        dashboardIcon: 'static/verificationIcon.png',
        dashboardColor: 'small-box bg3',
    },
    {
        displayName: "ITR OCR",
        link: "/itrOCR",
        menuIcon: "content_paste", // Angular Material Icon for content_paste
        dashboardIcon: 'static/verificationIcon.png',
        dashboardColor: 'small-box bg3',
    },
    {
        displayName: "Aadhaar Masking",
        link: "/aadhaarMasking",
        menuIcon: "remove_red_eye", // Angular Material Icon for remove_red_eye
        dashboardIcon: 'static/verificationIcon.png',
        dashboardColor: 'small-box bg3',
    },
    {
        displayName: "Aadhaar QR Search",
        link: "/aadhaarQRSearch",
        menuIcon: "qr_code", // Angular Material Icon for qr_code
        dashboardIcon: 'static/verificationIcon.png',
        dashboardColor: 'small-box bg3',
    },
    {
        displayName: "Crime Check Individual",
        link: "/crimeCheckIndividual",
        menuIcon: "person_search", // Angular Material Icon for person_search
        dashboardIcon: 'static/verificationIcon.png',
        dashboardColor: 'small-box bg3',
    },
    {
        displayName: "Crime Check Corporate",
        link: "/crimeCheckCorporate",
        menuIcon: "business_center", // Angular Material Icon for business_center
        dashboardIcon: 'static/verificationIcon.png',
        dashboardColor: 'small-box bg3',
    },
    {
        displayName: "Mobile Number Case Check",
        link: "/mobileNumberCaseCheck",
        menuIcon: "phone_android", // Angular Material Icon for phone_android
        dashboardIcon: 'static/verificationIcon.png',
        dashboardColor: 'small-box bg3',
    },
    {
        displayName: "Court Case Check",
        link: "/courtCaseCheck",
        menuIcon: "gavel", // Angular Material Icon for gavel
        dashboardIcon: 'static/verificationIcon.png',
        dashboardColor: 'small-box bg3',
    },
    {
        displayName: "GSTIN OCR",
        link: "/gstinOCR",
        menuIcon: "credit_card", // Angular Material Icon for credit_card
        dashboardIcon: 'static/verificationIcon.png',
        dashboardColor: 'small-box bg3',
    },
    {
        displayName: "CIN OCR",
        link: "/cinOCR",
        menuIcon: "description", // Angular Material Icon for description
        dashboardIcon: 'static/verificationIcon.png',
        dashboardColor: 'small-box bg3',
    },
    {
        displayName: "Voter ID OCR",
        link: "/voterIdOCR",
        menuIcon: "how_to_vote", // Angular Material Icon for how_to_vote
        dashboardIcon: 'static/verificationIcon.png',
        dashboardColor: 'small-box bg3',
    },
    {
        displayName: "Document Detection",
        link: "/documentDetection",
        menuIcon: "picture_as_pdf", // Angular Material Icon for picture_as_pdf
        dashboardIcon: 'static/verificationIcon.png',
        dashboardColor: 'small-box bg3',
    },
    {
        displayName: "Challan Information API",
        link: "/challanInformation",
        menuIcon: "receipt", // Angular Material Icon for receipt
        dashboardIcon: 'static/verificationIcon.png',
        dashboardColor: 'small-box bg3',
    },
    {
        displayName: "RTO Information API",
        link: "/rtoInformation",
        menuIcon: "directions_car", // Angular Material Icon for directions_car
        dashboardIcon: 'static/verificationIcon.png',
        dashboardColor: 'small-box bg3',
    },
    {
        displayName: "VPN / Proxy Checker API",
        link: "/vpnProxyChecker",
        menuIcon: "vpn_lock", // Angular Material Icon for vpn_lock
        dashboardIcon: 'static/verificationIcon.png',
        dashboardColor: 'small-box bg3',
    },
    {
        displayName: "IFSC Code Lookup API",
        link: "/ifscCodeLookup",
        menuIcon: "account_balance", // Angular Material Icon for account_balance
        dashboardIcon: 'static/verificationIcon.png',
        dashboardColor: 'small-box bg3',
    },
    {
        displayName: "UPI Info API",
        link: "/upiInfo",
        menuIcon: "account_balance_wallet", // Angular Material Icon for account_balance_wallet
        dashboardIcon: 'static/verificationIcon.png',
        dashboardColor: 'small-box bg3',
    },
    {
        displayName: "Pincode Info API",
        link: "/pincodeInfo",
        menuIcon: "location_on", // Angular Material Icon for location_on
        dashboardIcon: 'static/verificationIcon.png',
        dashboardColor: 'small-box bg3',
    },
    {
        displayName: "Fuel Price API",
        link: "/fuelPrice",
        menuIcon: "local_gas_station", // Angular Material Icon for local_gas_station
        dashboardIcon: 'static/verificationIcon.png',
        dashboardColor: 'small-box bg3',
    },
    {
        displayName: "Stock Price API",
        link: "/stockPrice",
        menuIcon: "trending_up", // Angular Material Icon for trending_up
        dashboardIcon: 'static/verificationIcon.png',
        dashboardColor: 'small-box bg3',
    },
    {
        displayName: "Fastag Information API",
        link: "/fastagInfo",
        menuIcon: "directions_car", // Angular Material Icon for directions_car
        dashboardIcon: 'static/verificationIcon.png',
        dashboardColor: 'small-box bg3',
    },
    {
        displayName: "Currency Exchange API",
        link: "/currencyExchange",
        menuIcon: "attach_money", // Angular Material Icon for attach_money
        dashboardIcon: 'static/verificationIcon.png',
        dashboardColor: 'small-box bg3',
    },
    {
        displayName: "Card Validator API",
        link: "/cardValidator",
        menuIcon: "credit_card", // Angular Material Icon for credit_card
        dashboardIcon: 'static/verificationIcon.png',
        dashboardColor: 'small-box bg3',
    },
    {
        displayName: "IMEI Validator API",
        link: "/imeiValidator",
        menuIcon: "mobile_friendly", // Angular Material Icon for mobile_friendly
        dashboardIcon: 'static/verificationIcon.png',
        dashboardColor: 'small-box bg3',
    },
    {
        displayName: "Mobile Verification API",
        link: "/mobileVerification",
        menuIcon: "smartphone", // Angular Material Icon for smartphone
        dashboardIcon: 'static/verificationIcon.png',
        dashboardColor: 'small-box bg3',
    },
    {
        displayName: "Comprehensive PAN Detailed",
        link: "/comprehensivePAN",
        menuIcon: "description", // Angular Material Icon for description
        dashboardIcon: 'static/verificationIcon.png',
        dashboardColor: 'small-box bg3',
    },
    {
        displayName: "EPFO Without OTP",
        link: "/epfoWithoutOTP",
        menuIcon: "account_circle", // Angular Material Icon for account_circle
        dashboardIcon: 'static/verificationIcon.png',
        dashboardColor: 'small-box bg3',
    },
    {
        displayName: "Name Match",
        link: "/nameMatch",
        menuIcon: "face", // Angular Material Icon for face
        dashboardIcon: 'static/verificationIcon.png',
        dashboardColor: 'small-box bg3',
    },
    {
        displayName: "Email Bulk Upload Verification",
        link: "/emailBulkUploadVerification",
        menuIcon: "cloud_upload", // Angular Material Icon for cloud_upload
        dashboardIcon: 'static/verificationIcon.png',
        dashboardColor: 'small-box bg3',
    },
    {
        displayName: "Passive Liveness Check",
        link: "/passiveLivenessCheck",
        menuIcon: "selfie", // Angular Material Icon for selfie
        dashboardIcon: 'static/verificationIcon.png',
        dashboardColor: 'small-box bg3',
    }
];

  permissionsList: any;

  menuItemsRetailer: any = [];
  menuItemsAdmin: any = [];
 
  constructor() {

  }




}
