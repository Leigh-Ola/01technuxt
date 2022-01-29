<template>
  <aside
    id="industries_page"
    class="overflow-hidden relative ubuntu block w-screen max-w-full m-0"
  >
    <nuxt-link class="no-underline hover:no-underline" to="/"> </nuxt-link>
    <topper :is_industries="true"></topper>

    <main-industry
      id="legal_software"
      name="Legal Software Development Services"
    >
      <!-- caption  -->
      <template v-slot:caption class="opensans text-gray-700 mt-4 px-7">
        We help professionals at law firms and law departments manage the
        business elements with innovative web and mobile solutions.
      </template>
      <!-- default main industry slot content -->
      <template v-slot:default class="opensans text-gray-700 mt-4 px-7">
        01 technologies offers litigation tools and software products for
        document management, time and billing management, matter management,
        client analysis, legal holds and more. <br />
        The solutions we provide include but are not limited to the followings:
        <br /><br />
        <a
          href="#firm_management_solutions"
          v-scroll-to="'#firm_management_solutions'"
          >Firm Management Solutions </a
        ><br />
        <a
          href="#document_management_solutions"
          v-scroll-to="'#document_management_solutions'"
          >Document Management Software</a
        >
        <br />
        <a
          href="#practice_management_solutions"
          v-scroll-to="'#practice_management_solutions'"
          >Practice Management Software</a
        >
        <br />
        <a
          href="#litigation_management_solutions"
          v-scroll-to="'#litigation_management_solutions'"
          >Litigation Portfolio Management Solutions</a
        ><br />
        <industry-list
          :bold="true"
          id="firm_management_solutions"
          name="Firm Management Solutions"
        >
          <div>
            User and client portals, collaboration tools, call, web, and video
            conferencing.
          </div>
          <div>
            Client “self-help” tools that allow clients to perform tasks
            directly that previously required active participation by firm
            lawyers.
          </div>
          <div>
            Calendaring and docketing applications to coordinate with court
            dates, track billable time, automate billing functions, track
            expenses, schedule tasks, and set reminders.
          </div>
          <div>
            Legal billing applications including custom fee schedules (hourly,
            flat fee, split fee, contingency, transactional, and user-defined),
            custom billing rates, automated time capture from the calendar,
            documents, tasks, and more.
          </div>
          <div>
            Bill preparation applications including low retainer fee
            notifications, plus payment methods integration including credit,
            debit, and payment gateways.
          </div>
          <div>
            General ledger applications including electronic IRS tax
            preparation, financial reporting, client account balances, audit
            trails, and Interest On Lawyer Trust Accounts (IOLTA) accounting
            features.
          </div>
        </industry-list>
        <industry-list
          :bold="true"
          id="practice_management_solutions"
          name="Practice Management Software"
        >
          <div>
            Practice Management Software is an efficient and readily usable
            knowledge management system that provides lawyers with ready access
            to the firm’s prior work product.
          </div>
          <div>
            Custom legal software development for practice management, case or
            matter management, e-discovery, courtroom, and Virtual Law Office
            (VLO) systems.
          </div>
          <div>
            Centralized databases for all practice management functions
            including client information, document management, scheduling,
            calendaring, docketing, time tracking, billing, and accounting.
          </div>
          <div>
            We program access management using Role-Based Access Controls
            (RBAC), user provisioning, encryption protocols, etc.
          </div>
        </industry-list>
        <industry-list
          :bold="true"
          id="document_management_solutions"
          name="Document Management Software"
        >
          <div>
            Document review software using predictive coding based on a “seed
            sample” of documents provided by firm lawyers.
          </div>
          <div>
            Courtroom technology including modules for case history, jury
            management, subpoena tracking, trial presentations, administrative
            hearings, appeal boards, deposition management, court reporting.
          </div>
          <div>
            Data identification, preservation, collection, processing, review,
            production processes and workflows for analyzing Electronically
            Stored Information (ESI) sources.
          </div>
          <div>
            Legal hold software including custodian identification, interviews,
            hold notifications and reminders, compliance portals, and other
            features.
          </div>
        </industry-list>
        <industry-list
          :bold="true"
          id="litigation_management_solutions"
          name="Litigation Portfolio Management Solutions"
        >
          <div>
            Monitor the progress of matters, resource commitments, and budget
            status in real time on a matter basis.
          </div>
          <div>
            Secure client portals for direct importing of client data,
            documents, and case or matter files.
          </div>
          <div>
            Case or matter management applications including workflow
            automation, database search, database import and export, conflict
            checking, plus support for multiple file formats, file attachments,
            e-mail correspondence, integrations, and sharing functions.
          </div>
          <div>
            Case or matter management platforms with legal research databases.
          </div>
          <div>
            Client analysis and case analytics features including sophisticated
            analysis and visualization tools, profitability results calculation
            into lawyer evaluation and compensation process, automation of
            reporting, re-analyzing and re-presenting data.
          </div>
        </industry-list>
      </template>
      <!-- other slot "sub" for main industry -->
      <!-- <template v-slot:sub>xxx</template> -->
    </main-industry>
    <main-industry
      id="health_software"
      name="Healthcare Software Development Services"
    >
      <template v-slot:caption class="opensans text-gray-700 mt-4 px-7">
        Raise your business quality and reduce operating costs by creating a
        unique healthcare software solution with us.
      </template>
      <!-- default main industry slot content -->
      <template
        v-slot:default
        class="opensans flex flex-col text-gray-700 mt-4 px-7"
      >
        We offer a full package of consulting, designing and development
        services to create cuttingedge technology solutions for your healthcare
        world while perfectly meeting your unique business needs.<br />
        Our solution helps to handle the risk while the software and your data
        go through a proper verification and validation. Our experts deliver a
        solution which is unique with its usability, reliability, and
        productivity, ensuring there are no constraints on your business
        processes and workflows. Our software increases the efficacy and
        accessibility of healthcare services. We provide the necessary tools for
        any emergency situation.<br /><br />
        01 technologies considers all regulatory requirements and delivers
        systems that are secure and fully compliant with HIPAA, CCHIT, and other
        compulsory standards and regulations.<br /><br />

        <industry-list
          name="Companies We Serve"
          id="companies_we_serve"
          :bold="true"
        >
          <div>Hospitals and Health Care Providers</div>
          <div>Medical Device Manufactures</div>
          <div>Biotechnology companies</div>
          <div>Laboratories</div>
          <div>Health Insurance Providers</div>
          <div>Pharmaceutical Companies</div>
          <div>Technology Vendors</div>
          <div>Contract Research Organization</div>
        </industry-list>

        <!-- tagline -->
        <div>
          <a
            class="taglinebox flex w-full mx-auto pb-4 text-center font-bold"
            href="#apply"
            v-scroll-to="'#apply'"
          >
            Grow Your Business With The Solutions We Provide In Healthcare
            Industry
          </a>
        </div>

        <!-- sub heading, sub industry -->
        <div
          class="sub_industry font-bold text-lg mb-3 comfortaa block font-bold"
        >
          EMR/EHR
        </div>
        <!-- <br><br> -->
        01 technologies-built Electronic Medical Record (EMR) solution allows
        the patient information to be shared within one healthcare organization,
        whereas Electronic Health Record (EHR) solution enable health-related
        records sharing across multiple organizations.<br />
        Our expert team builds and assists in EHR system integration with
        sophisticated features through which you can quickly create, store and
        organize electronic medical records, including patient charts,
        electronic prescriptions, lab orders and evaluations, also access
        patient demographic information, clinical data, medical billing, and
        much more.<br />
        <br />
        01Technologies uses industry-accepted formats, standards, and protocols
        to ensure that your new solution is seamlessly integrated with your
        software and hardware products, be it your practice management system,
        external laboratory system, insurance provider system, or your medical
        equipment. <br />
        <br />
        Our experience includes integration with already existing EHRs (through
        their Web service APIs or using HL7 (Health Level 7) or DB schema).

        <industry-list
          name="Our EHR solutions cover the essential areas based on Meaningful Use regulations, including:"
        >
          <div>Patient records management (demographic and medical data)</div>
          <div>Office visit management and scheduling</div>
          <div>E-Prescribing</div>
          <div>
            External laboratory and EMR integration by supporting multiple
            medical formats (HL7, CCD, CCR, etc.)
          </div>
          <div>Reporting system, etc.</div>
        </industry-list>

        <div
          class="sub_industry font-bold text-lg mb-3 comfortaa block font-bold"
        >
          Medical Billing
        </div>
        We develop software solutions that support electronic eligibility and
        benefits verification by smoothly integrating with billing systems.
        <br />
        With this solution, you will know the exact amount to charge the patient
        and rest assured that the insurance claim will not be rejected.
        <br /><br />Our team enables to handle all the operations in compliance
        with ANSI 5010 standards which will also increase the usefulness of
        transactions, such as referrals and authorization. We also use National
        Correct Coding Initiative (NCCI) industry accepted tools for minimizing
        coding and billing errors. <br />Our medical claim review programs
        include MR, NCCI Edits, MUEs, CERT, and Recovery Audit Program.

        <industry-list
          name="Our expertise covers all XML/EDIFACT transactions for implementing:"
        >
          <div>Medical billing text files decoding</div>
          <div>Capitation computation</div>
          <div>
            Eligibility and benefits verification (in real-time or by batch)
          </div>
          <div>Claims submission and status inquiry</div>
          <div>Paper claims</div>
          <div>Payments and transactions management</div>
          <div>Patients statements generation and management</div>
        </industry-list>
        <div
          class="sub_industry font-bold text-lg mb-3 comfortaa block font-bold"
        >
          Custom Software for Pharmaceuticals and Biotech Companies
        </div>
        We offer technologies to use Artificial Intelligence solutions,
        employing data visualization and analytics to facilitate and accelerate
        the discovery process, conducting your research faster at a lower cost.
        <br /><br />
        01Technologies-built custom software solutions are tailored to assist
        you in your day-to-day operations, sales and marketing efforts and in
        R&D projects.<br />
        Our CRM solution helps to engage and influence potential customers
        within your network instantly, gather instant feedback and integrate
        with other systems including Medical Billing Solutions, Laboratory
        Information Management System, etc.<br /><br />
        We offer data analytics and visualization automation tools and lab
        workflow management systems to facilitate drug R&D.
        <div
          class="sub_industry font-bold text-lg my-3 comfortaa block font-bold"
        >
          Electronic Prescription
        </div>

        The solution is an e-Prescribing system that stores the data about
        patients' biometrics, allergies, prescriptions and helps generate
        electronic orders based on it. <br />This solution simplifies
        prescriptions and minimizes medication errors.
        <div
          class="sub_industry font-bold text-lg my-3 comfortaa block font-bold"
        >
          Patient Engagement Portals
        </div>
        With a user-friendly and cyber-secure Patient Engagement Portal patients
        can check their lab results, ask for prescription refills, share their
        medical data with a physician or access all relevant medical data when
        preparing for a doctor's appointment and much more.<br />
        Meanwhile, hospitals can engage with patients through Patient Mobile
        Apps, communicate with them through voice, text or app notifications.<br />
        Hospitals may receive patient responses and send them Patient
        Satisfaction Questionnaires or Polls, uploading the data into any
        analytics software.<br /><br />
        In the US, patient portal implementation is among the required core
        objectives for Meaningful Use Stage 2. <br />Without a portal, hospitals
        cannot qualify for incentive payments. <br />In the UK, the government
        insists that general practices make records available to patients and
        encourage them to access these records more actively.
        <div
          class="sub_industry font-bold text-lg my-3 comfortaa block font-bold"
        >
          Practice Management Systems (PMS)
        </div>
        PMS is to automate clients' operations, to streamline the most critical
        processes and to improve operational efficiency with minimal
        resources.<br />
        Solution functions include appointment scheduling algorithms, task
        management systems, patient check-in web/mobile apps and other
        automation tools.
        <div
          class="sub_industry font-bold text-lg my-3 comfortaa block font-bold"
        >
          Hospital Management
        </div>
        A comprehensive suite of solutions to help streamline operations, reduce
        costs, and improve healthcare (Patient Registration, Ward and Bed
        Management, Electronic Medical Record (EMR), Lab and Radiology
        Information Systems, Purchasing, Drug/Pharmacy Management, Material
        Management/Inventory, Billing and Collections, Enterprise Analytics).<br /><br />
        Any solution we build can have a mobile version or a complementary
        mobile app.<br />
        Some Health apps require FDA clearance in which we have long
        expertise.<br />
        Our team has experience in building iOS and Android apps, syncing them
        with the cloud and integrating them with third-party APIs.
        <div
          class="sub_industry font-bold text-lg my-3 comfortaa block font-bold"
        >
          Laboratory Information Management (LIM)
        </div>

        We build HIPAA and CCHIT compliant LIM systems to thoroughly support
        your lab's workflow. <br />
        Our experience in LIM systems for blood banks, anatomic and clinical
        pathology laboratories, as well as for various kinds of lab tests
        including microbiology, clinical biochemistry, cytopathology,
        cytogenetic, and molecular genetics, enables us to support you with any
        inquiry connected with Laboratory Information Management.

        <industry-list
          name="
        We offer integration with lab instruments and other hardware
        in laboratories to have access to medical test results from your system
        within seconds, and to share it with the patient and the doctor
        instantly. LIM systems can automate laboratory processes including:"
        >
          <div>Data Input</div>
          <div>Quality Control</div>
          <div>Customized Reporting</div>
          <div>Utilization of remote access for patient outreach</div>
          <div>Other personalized features specific to your needs</div>
        </industry-list>
      </template>
    </main-industry>
    <main-industry
      id="financial_software"
      name="Financial Software Development Services"
    >
      <template v-slot:caption class="opensans text-gray-700 mt-4 px-7">
        Choose performance, adaptability, and rock-solid reliability.
      </template>
      <!-- default main industry slot content -->
      <template v-slot:default class="opensans text-gray-700 mt-4 px-7">
        Our ability to quickly scale up the processes across the entire system
        allows financial institutions to promptly respond to external and
        internal changes, such as mergers and acquisitions, management, and
        staffing changes, or interest rate fluctuations.
        <br /><br />We understand that you operate with strict regulations and
        are under constant pressure to achieve ever tighter operational
        efficiency.<br />
        01 technologies superior security, designed postSarbanes Oxley, allows
        keeping pace with ever-changing competitive and regulatory
        environments.<br />
        Our expertise in financial compliance management and reporting
        eliminates the need to rely on other systems to aggregate the data
        needed for the statutory reporting. <br /><br />We are Specialized in
        Most Trending Financial and Banking Development Services

        <div
          class="sub_industry font-bold text-lg my-3 comfortaa block font-bold"
        >
          FIX Integration
        </div>
        Financial service entities are investing heavily in optimizing
        electronic trading and employing direct market access (DMA) to transact
        in a cost-efficient manner and increase their speed to financial
        markets.<br />
        Minimizing the trade cost and keeping latency low, requires an
        understanding of the Financial Information Exchange Protocol (FIX).<br />
        We offer you our vast experience in integrating means of electronic
        trade-communication and security requirements to many order management
        and trading systems.
        <div
          class="sub_industry font-bold text-lg my-3 comfortaa block font-bold"
        >
          Portfolio Management
        </div>
        Portfolio management and investment analysis is the art of examining
        your current spread of investments to determine how effective the ratio
        and policies are in achieving your specific goals. It balances your risk
        level against the performance of various stocks, bonds, funds, and other
        types of investments to efficiently allocate the money you are
        interested in investing. <br />Whether you are an individual looking to
        manage your financial portfolios, a professional money manager, a
        trader, a financial advisor, a portfolio manager, a hedge fund manager,
        or a broker, staying on top of investment portfolio management leaves
        you one step ahead of the rest of the field.<br /><br />
        For tracking and managing multiple portfolios for yourself or your
        clients, including numerous IRAs, 401(k) and investment portfolio
        accounts, brokerage trading accounts, stocks, bonds, fixed assets,
        derivatives, high yielding savings accounts, international assets,
        structured instruments, etc., you'll need a top investment portfolio
        management software program to stay on top of it all.
      </template>

      <industry-list
        name="Key Features of Portfolio Management Systems developed by 01Technologies:"
      >
        <div>
          Multiple Portfolio Views: asset allocations, geographic regions,
          sectors, performance comparisons
        </div>
        <div>
          Import transaction capability from banks and brokerage accounts
        </div>
        <div>Cost basis tracking</div>
        <div>Capital gains/loss estimates</div>
        <div>Brokerage accounts</div>
        <div>“What if” analysis</div>
        <div>
          Technical analysis - stochastics, RSI, trend analysis, moving averages
        </div>
        <div>Stock Purchases</div>
        <div>Stock sales and many others</div>
      </industry-list>
      <div
        class="sub_industry font-bold text-lg mb-3 comfortaa block font-bold"
      >
        Trading Solutions
      </div>
      Automated trading systems are becoming more and more popular among
      professional traders, fund managers, and individual investors alike.
      Bigger enterprise players continue to invest in more sophisticated
      trading, algorithmic trading, and high-frequency trading as those
      platforms can execute orders at speeds and magnitude more significant than
      any human equivalent. <br />
      Apparently, the success of the overall system depends on how well the
      rules perform. High volumes of trades could delay historical data series
      delivered by exchanges. Therefore, intraday and end-of-day data
      availability and quality are critical to strategic success. Another
      crucial point in quantitative data mining is quick access to historical
      data series.<br /><br />
      When developed and appropriately deployed, a trading system increases
      efficiency, manages risks and most importantly increases your profits per
      trade. Our knowledge of trading and successful implementation of custom
      data mining platforms for large volume high-frequency data logging brings
      additional benefits for those firms who use quantitative data analysis in
      trading.<br /><br />
      01 technologies also has an experience in building effective back-testing
      and forward testing systems that optimize the results obtained both with
      the historical and real-time market data.
      <div
        class="sub_industry font-bold text-lg mb-3 comfortaa block font-bold"
      >
        Order Management Systems
      </div>
      With well-designed Order management systems (OMS’s) you'll facilitate and
      manage the order execution of securities, typically through the FIX
      protocol. OMS's allow you to input (change, cancel and update) orders to
      the system for routing to the pre-established destinations.<br />
      OMSs developed by 01 technologies provide multi-asset functionality for
      both buy-side and sell-side and fully automate order fulfillment cycle.

      <industry-list
        name="Order Management Systems developed by 01 technologies allow to:"
      >
        <div>
          Place orders, process drop, shipments, and amend existing orders from
          a single domain
        </div>
        <div>
          View transactions and order statuses live while maintaining order
          history for future upselling and reporting
        </div>
        <div>
          Calculate minimum order quantities and thresholds, based on previous
          order history and current inventory data
        </div>
        <div>
          Automatically update the state of an executed order and send an
          execution report to the order's originating firm
        </div>
        <div>
          Direct market access and algorithmic trading functionalities for a
          sell-side
        </div>
      </industry-list>
    </main-industry>
    <main-industry
      id="entertainment_software"
      name="Media & Entertainment Software Development Services"
    >
      <template v-slot:caption class="opensans text-gray-700 mt-4 px-7">
        Designing, developing and supporting solutions that help you succeed.
      </template>
      <template v-slot:default class="opensans text-gray-700 mt-4 px-7">
        Whether you’re a publication and advertising house, music company,
        broadcaster, cinematography house, casino or any other type of Media and
        Entertainment business, we provide solutions specifically designed to
        manage the challenges faced in your industry. <br />
        Our cutting-edge technology keeps up with evolution in the media sector.
        <industry-list name="We Offer a Package of Benefits, so You Can:">
          <div>Maintain current revenue streams</div>
          <div>Reduce costs and increase flexibility</div>
          <div>Get detailed analytics and reporting</div>
        </industry-list>
        <div class="taglinebox flex w-full mx-auto pb-4 text-center font-bold">
          <a href="#apply" class="tagline mx-auto">
            Boost Your Business with Solutions We Provide in Media and
            Entertainment Industry!
          </a>
        </div>
        <div
          class="sub_industry font-bold text-lg my-3 comfortaa block font-bold"
        >
          Sales and Analyses Measurement
        </div>
        To continue thriving in the competition of new technology era, we build
        solutions that can help you have a better approach to content
        distribution, engage an audience, measure sales and automate business
        processes. Big data analytics solution will be implemented, as well.
        <br /><br />
        Sales and Analyses measurement solutions are especially critical for
        publishing, marketing, advertising, and sport analytics businesses.
        <div
          class="sub_industry font-bold text-lg my-3 comfortaa block font-bold"
        >
          Digital Content Streaming
        </div>
        Streaming content to any device and anywhere is the new reality. We help
        to create professional webcasts with live streaming production solution
        which allows combining multiple live video cameras, movies, computer
        desktops, audio tracks, images and titles for the live webcast or
        ondemand broadcast. <br /><br />
        You can also create video tutorials and demos with screen recording and
        video editing solutions which simultaneously capture screen activity,
        video camera, microphone and computer audio allowing you to edit your
        records and publish final videos to websites or weblogs. <br /><br />
        Our Digital content streaming solution also offers social engagement
        apps for broadcasters, synchronized ad tools, and simultaneous content
        distribution solutions
        <div
          class="sub_industry font-bold text-lg my-3 comfortaa block font-bold"
        >
          Gaming and Betting
        </div>
        The world is moving online, and if you don't want to get left behind,
        you need a unique Gaming custom solution. We provide security solution
        with the best interface and actionable buttons in the gaming and betting
        community. <br /><br />
        Our flexible solution maximizes player spend and game revenue while
        minimizing operational costs. Our expertise in developing complex
        systems allows us to build predictive analytics apps for casinos, mobile
        betting and gambling apps, smartwatch apps, and not only.
        <div
          class="sub_industry font-bold text-lg my-3 comfortaa block font-bold"
        >
          Production Management & Automation
        </div>
        Having your production system anywhere you are, and on any device, you
        work with is vital, but keeping it safe is of higher importance. We give
        a full solution of production office automation, including system
        security, document watermarking, file permissions customization, and not
        only.<br />
        01Technologies-built solution provides one secure archival library for
        all your production documents in an easily searchable platform that both
        serves as a communication catalog and supports corporate compliance
        across almost every department in your organization.
        <br /><br />Real-time production updates will keep you informed of any
        changes and new tasks via your dashboard with email and mobile options.
        We provide a solution which reduces physical storage costs.
        <div
          class="sub_industry font-bold text-lg my-3 comfortaa block font-bold"
        >
          Movie Screenwriting, Scheduling and Budgeting
        </div>
        Movie making is becoming much more comfortable and funnier with
        enterprise customized solution.
        <industry-list
          name="Now screenwriting, scheduling and
        budgeting can be used from one cloud-based portal in accordance with
        users’ roles."
        >
          <div>
            Screenwriting tool formats movies, television, novels, stage plays
            and comic books scripts. You can create your stories with templates
            or customize your ones, navigate and format them to get your stories
            from concept to screen.
          </div>
          <div>
            Scheduling may cause either a victory or a loss to your production.
            With the 01Technologies solution, you won’t need to follow your
            tasks manually, as you’ll have a smart answer, which will
            automatically schedule your activities and notify you.
          </div>
          <div>
            Budgeting software is essential for an ethical decision making.
            01Technologies-built customized software solution is built to face
            the complex and demanding issues of Media and Entertainment
            industry. We’ll help you create and compare budgets for multiple
            locations, view from varying perspectives, and estimate incentives
            for productions of all sizes.
          </div>
        </industry-list>
      </template>
    </main-industry>

    <bottom></bottom>
  </aside>
</template>

<script>
import Bottom from "~/components/bottom.vue";
import MainIndustry from "~/components/main_industry.vue";
import IndustryList from "~/components/industry_list.vue";
import Topper from "~/components/topper.vue";

export default {
  title: "Services",
  components: {
    bottom: Bottom,
    "main-industry": MainIndustry,
    "industry-list": IndustryList,
    topper: Topper,
  },
  head: {
    title: "01  Technologies | Industries",
    link: [
      {
        rel: "stylesheet",
        type: "text/css",
        href: "/css/fonts.css",
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "/css/added.css",
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "/css/industries.css",
      },
    ],
  },
  meta: [
    {
      hid: "description",
      name: "description",
      content:
        "Our services are available to - and relevant in - a broad range of industries.",
    },
    {
      hid: "viewport",
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
    {
      content: "IE=edge",
      hid: "X-UA-Compatible",
      name: "X-UA-Compatible",
    },
  ],
};
</script>
