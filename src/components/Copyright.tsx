"use client"; // 👈 add this if you plan to use interactivity (like mobile toggle)

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";


export default function Copyright() {

      return (
            <>
                  {/* Copyright Start */}
                  <div className="container-fluid copyright py-4">
                        <div className="container">
                              <div className="row g-4 align-items-center">
                                    <div className="col-md-6 text-center text-md-start mb-md-0">
                                          <span className="text-white">
                                                <Link href="/" className="onxius text-white">
                                                      <i className="fas fa-copyright text-light me-2" />
                                                      Onxius
                                                </Link>
                                                , All right reserved.
                                          </span>
                                    </div>
                                    <div className="col-md-6 text-center text-md-end text-white">
                                          {/*/*** This template is free as long as you keep the below author’s credit link/attribution link/backlink. *** /*/}
                                          {/*/*** If you'd like to use the template without the below author’s credit link/attribution link/backlink, *** /*/}
                                          {/*/*** you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". *** /*/}
                                          Designed By{" "}
                                          <Link className="border-bottom text-white" href="/">
                                                Team Onxius
                                          </Link>
                                    </div>
                              </div>
                        </div>
                  </div>
                  {/* Copyright End */}
            </>
      );
}