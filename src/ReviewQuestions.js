export const set1 = [
    {
        'id':101,
        'question':`You have been tasked with interviewing line-of-business owners about their needs for a new cloud application. Which of the following do you expect to find?`,
        'answers': [
            {'id':0, 'desc':`A comprehensive list of defined business and technical requirements`},
            {'id':1, 'desc':`That their business requirements do not have a one-to-one correlation with technical
            requirements`},
            {'id':2, 'desc':`Business and technical requirements in conflict`},
            {'id':3, 'desc':`Clear consensus on all requirements`},
        ],
        'answerId': [1],
        'rationale': [{'id':0, 'desc':`B. Business requirements are high-level, business-oriented requirements that are rarely satisfied by meeting a single technical requirement. Option A is incorrect because business sponsors rarely have sufficient understanding of technical requirements in order to provide a comprehensive list. Option C is incorrect, because busi- ness requirements constrain technical options but should not be in conflict. Option D is incorrect because there is rarely a clear consensus on all requirements. Part of an architect’s job is to help stakeholders reach a consensus.`}]
    },
    {
        'id':102,
        'question':`You have been asked by stakeholders to suggest ways to reduce operational expenses as part of a cloud migration project. Which of the following would you recommend?`,
        'answers': [
            {'id':0, 'desc':`Managed services, preemptible machines, access controls`},
            {'id':1, 'desc':`Managed services, preemptible machines, autoscaling`},
            {'id':2, 'desc':`NoSQL databases, preemptible machines, autoscaling`},
            {'id':3, 'desc':`NoSQL databases, preemptible machines, access controls`},
        ],
        'answerId': [1],
        'rationale': [
            {'id':0, 'desc':``},
        ]
    },
    {
        'id':103,
        'question':`Some executives are questioning your recommendation to employ continuous integration/ continuous deployment (CI/CD). What reasons would you give to justify your recommendation?`,
        'answers': [
            {'id':0, 'desc':`CI/CD supports small releases, which are easier to debug and enable faster feedback.`},
            {'id':1, 'desc':`CI/CD is used only with preemptible machines and therefore saves money.`},
            {'id':2, 'desc':`CI/CD fits well with waterfall methodology but not agile methodologies.`},
            {'id':3, 'desc':`CI/CD limits the number of times code is released.`},
        ],
        'answerId': [0],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':104,
        'question':`The finance director has asked your advice about complying with a document retention regulation. What kind of service-level objective (SLO) would you recommend to ensure that the finance director will be able to retrieve sensitive documents for at least the next seven years? When a document is needed, the finance director will have up to seven days to retrieve it. The total storage required will be approximately 100 GB.`,
        'answers': [
            {'id':0, 'desc':`High availability SLO`},
            {'id':1, 'desc':`Durability SLO`},
            {'id':2, 'desc':`Reliability SLO`},
            {'id':3, 'desc':`Scalability SLO`},
        ],
        'answerId': [1],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':105,
        'question':`You are facilitating a meeting of business and technical managers to solicit requirements for a cloud migration project. The term incident comes up several times. Some of the business managers are unfamiliar with this term in the context of IT. How would you describe an incident?`,
        'answers': [
            {'id':0, 'desc':`A disruption in the ability of a DevOps team to complete work on time`},
            {'id':1, 'desc':`A disruption in the ability of the business managers to approve a project plan on schedule`},
            {'id':2, 'desc':`A disruption that causes a service to be degraded or unavailable`},
            {'id':3, 'desc':`A personnel problem on the DevOps team`},
        ],
        'answerId': [2],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':106,
        'question':`You have been asked to consult on a cloud migration project that includes moving private medical information to a storage system in the cloud. The project is for a company in
        the United States. What regulation would you suggest that the team review during the requirements-gathering stages?`,
        'answers': [
            {'id':0, 'desc':`General Data Protection Regulations (GDPR)`},
            {'id':1, 'desc':`Sarbanes–Oxley (SOX)`},
            {'id':2, 'desc':`Payment Card Industry Data Security Standard (PCI DSS)`},
            {'id':3, 'desc':`Health Insurance Portability and Accountability Act (HIPAA)`},
        ],
        'answerId': [3],
        'rationale': []
    },
    {
        'id':107,
        'question':`You are in the early stages of gathering business and technical requirements. You have noticed several references about needing up-to-date and consistent information regarding product inventory. Inventory is managed on a global scale, and the warehouses storing inventory are located in North America, Africa, Europe, and India. Which managed database solution in Google Cloud would you include in your set of options for an inventory database?`,
        'answers': [
            {'id':0, 'desc':`Cloud Storage`},
            {'id':1, 'desc':`BigQuery`},
            {'id':2, 'desc':`Cloud Spanner`},
            {'id':3, 'desc':`Microsoft SQL Server`},
        ],
        'answerId': [2],
        'rationale': []
    },
    {
        'id':108,
        'question':`A developer at Mountkirk Games is interested in how architects decide which database
        to use. The developer describes a use case that requires a document store. The developer would rather not manage database servers or have to run backups. What managed service would you suggest the developer consider?
        `,
        'answers': [
            {'id':0, 'desc':`Cloud Datastore`},
            {'id':1, 'desc':`Cloud Spanner`},
            {'id':2, 'desc':`Cloud Storage`},
            {'id':3, 'desc':`BigQuery`},
        ],
        'answerId': [0],
        'rationale': []
    },
    {
        'id':109,
        'question':`Members of your company’s legal team are concerned about using a public cloud service because other companies, organizations, and individuals will be running their systems in the same cloud. You assure them that your company’s resources will be isolated and not network-accessible to others because of what networking resource in Google Cloud?`,
        'answers': [
            {'id':0, 'desc':`CIDR blocks`},
            {'id':1, 'desc':`Direct connections`},
            {'id':2, 'desc':`Virtual private clouds`},
            {'id':3, 'desc':`Cloud Pub/Sub`},
        ],
        'answerId': [2],
        'rationale': []
    },
    {
        'id':110,
        'question':`What two business drivers are behind Dress4Win’s interest in moving to the cloud?`,
        'answers': [
            {'id':0, 'desc':`Insufficient infrastructure capacity and desire to be more agile`},
            {'id':1, 'desc':`Insufficient infrastructure and competitors moving to the cloud`},
            {'id':2, 'desc':`Competitors moving to the cloud and desire to be more agile`},
            {'id':3, 'desc':`Insufficient infrastructure and short-term cost savings`},
        ],
        'answerId': [0],
        'rationale': []
    },
    {
        'id':111,
        'question':`Dress4Win is considering replacing its self-managed MySQL database with a managed
        service. Which Google Cloud service would you recommend that they consider?`,
        'answers': [
            {'id':0, 'desc':`Cloud Dataproc`},
            {'id':1, 'desc':`Cloud Dataflow`},
            {'id':2, 'desc':`Cloud SQL`},
            {'id':3, 'desc':`PostgreSQL`},
        ],
        'answerId': [2],
        'rationale': []
    },
    {
        'id':112,
        'question':`Which of the following requirements from a customer makes you think the application
        should run in Compute Engine and not App Engine?`,
        'answers': [
            {'id':0, 'desc':`Dynamically scale up or down based on game activity`},
            {'id':1, 'desc':`Connect to a database`},
            {'id':2, 'desc':`Run a hardened Linux distro on a virtual machine`},
            {'id':3, 'desc':`Don’t lose data`},
        ],
        'answerId': [2],
        'rationale': []
    },
    {
        'id':113,
        'question':`Consider the TerramEarth case study. What aspect of that case study prompts you to consider potentially significant changes to requirements in the future?`,
        'answers': [
            {'id':0, 'desc':`Dealers will want more reports about their customers.`},
            {'id':1, 'desc':`Of 20 million pieces of equipment, only 200,000 have cellular connections; 19,800,000 additional pieces of equipment may someday transmit data in real time instead of downloading it in batches.`},
            {'id':2, 'desc':`TerramEarth is in a competitive industry.`},
            {'id':3, 'desc':`TerramEarth would like to partner with other companies to improve overall service to
            their customers.`},
        ],
        'answerId': [1],
        'rationale': []
    },
    {
        'id':114,
        'question':`Mountkirk Games wants to store player game data in a time-series database. Which Google Cloud managed database would you recommend?`,
        'answers': [
            {'id':0, 'desc':`Bigtable`},
            {'id':1, 'desc':`BigQuery`},
            {'id':2, 'desc':`Cloud Storage`},
            {'id':3, 'desc':`Cloud Dataproc`},
        ],
        'answerId': [0],
        'rationale': []
    },
    {
        'id':115,
        'question':`The game analytics platform for Mountkirk Games requires analysts to be able to query up to 10 TB of data. What is the best managed database solution for this requirement?`,
        'answers': [
            {'id':0, 'desc':`Cloud Spanner`},
            {'id':1, 'desc':`BigQuery`},
            {'id':2, 'desc':`Cloud Storage`},
            {'id':3, 'desc':`Cloud Dataprep`},
        ],
        'answerId': [1],
        'rationale': []
    },
];

export const set2 = [
    {
        'id':201,
        'question':`In the Dress4Win case study, the volume of data and compute load will grow with respect to what factor?`,
        'answers': [
            {'id':0, 'desc':`The number of customers, designers, and retailers`},
            {'id':1, 'desc':`The time the application is running`},
            {'id':2, 'desc':`The type of storage used`},
            {'id':3, 'desc':`Compliance with regulations`},
        ],
        'answerId': [0],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':202,
        'question':`You have received complaints from customers aobut long wait times while loading application pages in their browsers, especially pages with several images. Your director has tasked you with reducing latency when accessing and transmitting data to a client device outside the cloud. Which of the following would you use? (Choose two.)`,
        'answers': [
            {'id':0, 'desc':`Multiregional storage`},
            {'id':1, 'desc':`Coldline storage`},
            {'id':2, 'desc':`CDN`},
            {'id':3, 'desc':`Cloud Pub/Sub`},
            {'id':4, 'desc':`Cloud Dataflow`},
        ],
        'answerId': [0,2],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':203,
        'question':`Mountkirk Games will analyze game players' usage patterns. This will require collecting time-series data including game state. What database would be a good option for doing this?`,
        'answers': [
            {'id':0, 'desc':`BigQuery`},
            {'id':1, 'desc':`Bigtable`},
            {'id':2, 'desc':`Cloud Spanner`},
            {'id':3, 'desc':`Cloud Storage`},
        ],
        'answerId': [1],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':204,
        'question':`You have been hired to consult with a new data warehouse team. They are struggling to meet schedules because they repeatedly find problems with data quality and have to write preprocessing scripts to clean the data. What managed service would you recommend for addressing these problems?`,
        'answers': [
            {'id':0, 'desc':`Cloud Dataflow`},
            {'id':1, 'desc':`Cloud Dataproc`},
            {'id':2, 'desc':`Cloud Dataprep`},
            {'id':3, 'desc':`Cloud Datastore`},
        ],
        'answerId': [0],
        'rationale': [
            {'id':0, 'desc':`Cloud Dataflow is a batch and stream processing service that can be used for transforming data before it is loaded into a data warehouse`},]
    },
    {
        'id':205,
        'question':`You have deployed an application that receives data from sensors on TerramEarth equipment. Sometimes more data arrives than can be processed by the current set of Compute Engine instances. Business managers do not want to run additional VMs. What changes could you make to ensure that data is not lost because it cannot be processed as it is sent from the equipment? Assume that business managers want the lowest-cost solution.`,
        'answers': [
            {'id':0, 'desc':`Write data to local SSDs on the Compute Engine VMs.`},
            {'id':1, 'desc':`Write data to Cloud Memorystore, and have the application read data from the cache.`},
            {'id':2, 'desc':`Write data from the equipment to a Cloud Pub/Sub queue, and have the application read data from the queue.`},
            {'id':3, 'desc':`Tune the application to run faster.`},
        ],
        'answerId': [2],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':206,
        'question':`Your company uses Apache Spark for data science applications. Your manager has asked you to investigate running Spark in the cloud. Your manager’s goal is to lower the overall
        cost of running and managing Spark. What would you recommend?`,
        'answers': [
            {'id':0, 'desc':`Run Apache Spark in Compute Engine.`},
            {'id':1, 'desc':`Use Cloud Dataproc with preemptible virtual machines.`},
            {'id':2, 'desc':`Use Cloud Dataflow with preemptible virtual machines.`},
            {'id':3, 'desc':`Use Cloud Memorystore with Apache Spark running in Compute Engine.`},
        ],
        'answerId': [1],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':207,
        'question':`You are working with a U.S. hospital to extract data from an electronic health record (EHR) system. The hospital has offered to provide business requirements, but there is little information about regulations in the documented business requirements. What regulations would you look to for more guidance on complying with relevant regulations?
        `,
        'answers': [
            {'id':0, 'desc':`GDPR`},
            {'id':1, 'desc':`SOX`},
            {'id':2, 'desc':`HIPAA`},
            {'id':3, 'desc':`PCI DSS`},
        ],
        'answerId': [2],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':208,
        'question':`What security control can be used to help detect changes to data?`,
        'answers': [
            {'id':0, 'desc':`Firewall rules`},
            {'id':1, 'desc':`Message digests`},
            {'id':2, 'desc':`Authentication`},
            {'id':3, 'desc':`Authorization`},
        ],
        'answerId': [1],
        'rationale': [
            {'id':0, 'desc':`Message digests are used to detect changes in files`},]
    },
    {
        'id':209,
        'question':`Your company has a data classification scheme for categorizing data as secret, sensitive, private, and public. There are no confidentiality requirements for public data. All other data must be encrypted at rest. Secret data must be encrypted with keys that the company controls. Sensitive and private data can be encrypted with keys managed by a third
        party. Data will be stored in GCP. What would you recommend in order to meet these requirements while minimizing cost and administrative overhead?`,
        'answers': [
            {'id':0, 'desc':`Use Cloud KMS to manage keys for all data.`},
            {'id':1, 'desc':`Use Cloud KMS for secret data and Google default encryption for other data.`},
            {'id':2, 'desc':`Use Google default encryption for all data.`},
            {'id':3, 'desc':`Use a custom encryption algorithm for all data.`},
        ],
        'answerId': [1],
        'rationale': [
            {'id':0, 'desc':`Cloud KMS allows the customer to manage keys used to encrypt secret data. The requirements for the other categories are met by GCP’s default encryption-at-rest practice`},]
    },
    {
        'id':210,
        'question':`You manage a service with several databases. The queries to the relational database are increasing in latency. Reducing the amount of data in tables will improve performance
        and reduce latency. The application administrator has determined that approximately
        60 percent of the data in the database is more than 90 days old and has never been queried and does not need to be in the database. You are required to keep the data for five years in case it is requested by auditors. What would you propose to decrease query latency without increasing costs—or at least keeping any cost increases to a minimum?`,
        'answers': [
            {'id':0, 'desc':`Horizontally scale the relational database.`},
            {'id':1, 'desc':`Vertically scale the relational database.`},
            {'id':2, 'desc':`Export data more than 90 days old, store it in Cloud Storage Coldline class storage, and delete that data from the relational database.`},
            {'id':3, 'desc':`Export data more than 90 days old, store it in Cloud Storage multiregional class storage, and delete that data from the relational database.`},
        ],
        'answerId': [2],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':211,
        'question':`Your company is running several custom applications that were written by developers who are no longer with the company. The applications frequently fail. The DevOps team is paged more for these applications than any others. You propose replacing those applications with several managed services in GCP. A manager who is reviewing your cost estimates for using managed services in GCP notes that the cost of the managed services will be more than what they pay for internal servers. What would you recommend as the next step for the manager?`,
        'answers': [
            {'id':0, 'desc':`Nothing. The manager is correct—the costs are higher. You should reconsider your recommendation.`},
            {'id':1, 'desc':`Suggest that the manager calculate total cost of ownership, which includes the cost to support the applications as well as infrastructure costs.`},
            {'id':2, 'desc':`Recommend running the custom applications in Compute Engine to lower costs.`},
            {'id':3, 'desc':`Recommend rewriting the applications to improve reliability.`},
        ],
        'answerId': [1],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':212,
        'question':`A director at Mountkirk Games has asked for your recommendation on how to measure the success of the migration to GCP. The director is particularly interested in customer satisfaction. What KPIs would you recommend?`,
        'answers': [
            {'id':0, 'desc':`Average revenue per customer per month`},
            {'id':1, 'desc':`Average time played per customer per week`},
            {'id':2, 'desc':`Average time played per customer per year`},
            {'id':3, 'desc':`Average revenue per customer per year`},
        ],
        'answerId': [1],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':213,
        'question':`Mountkirk Games is implementing a player analytics system.You have been asked to document requirements for a stream processing system that will ingest and preprocess data before writing it to the database. The preprocessing system will collect data about each player for one minute and then write a summary of statistics about that database. The project manager has provided the list of statistics to calculate and a rule for calculating values for missing data. What other business requirements would you ask of the project manager?`,
        'answers': [
            {'id':0, 'desc':`How long to store the data in the database?`},
            {'id':1, 'desc':`What roles and permissions should be in place to control read access to data in the
            database?`},
            {'id':2, 'desc':`How long to wait for late-arriving data?`},
            {'id':3, 'desc':`A list of managed services that can be used in this project`},
        ],
        'answerId': [2],
        'rationale': [
            {'id':0, 'desc':`In stream processing applications that collect data for a time and then produce summary or aggregated data, there needs to be a limit on how long the pro- cessor waits for late-arriving data before producing results.`},]
    },
    {
        'id':214,
        'question':`A new data warehouse project is about to start. The data warehouse will collect data from 14 different sources initially, but this will likely grow over the next 6 to 12 months. What managed GCP service would you recommend for managing metadata about the data warehouse sources?`,
        'answers': [
            {'id':0, 'desc':`Data Catalog`},
            {'id':1, 'desc':`Cloud Dataprep`},
            {'id':2, 'desc':`Cloud Dataproc`},
            {'id':3, 'desc':`BigQuery`},
        ],
        'answerId': [0],
        'rationale': [
            {'id':0, 'desc':`Data Catalog is a managed service for metadata`},]
    },
    {
        'id':215,
        'question':`You are consulting for a multinational company that is moving its inventory system to GCP. The company wants to use a managed database service, and it requires SQL and strong consistency. The database should be able to scale to global levels. What service would you recommend?`,
        'answers': [
            {'id':0, 'desc':`Bigtable`},
            {'id':1, 'desc':`Cloud Spanner`},
            {'id':2, 'desc':`Cloud Datastore`},
            {'id':3, 'desc':`BigQuery`},
        ],
        'answerId': [1],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':216,
        'question':`TerramEarth has interviewed dealers to better understand their needs regarding data. Dealers would like to have access to the latest data available, and they would like to minimize the amount of data they have to store in their databases and object storage systems. How would you recommend that TerramEarth provide data to their dealers?`,
        'answers': [
            {'id':0, 'desc':`Extract dealer data to a CSV file once per night during off-business hours and upload it to a Cloud Storage bucket accessible to the dealer.`},
            {'id':1, 'desc':`Create an API that dealers can use to retrieve specific pieces of data on an as-needed basis.`},
            {'id':2, 'desc':`Create a database dump using the database export tool so that dealers can use the database import tool to load the data into their databases.`},
            {'id':3, 'desc':`Create a user account on the database for each dealer and have them log into the database to run their own queries.`},
        ],
        'answerId': [1],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':217,
        'question':`Your company has large volumes of unstructured data stored on several network-attached storage systems. The maintenance costs are increasing, and management would like to consider alternatives. What GCP storage system would you recommend?`,
        'answers': [
            {'id':0, 'desc':`Cloud SQL`},
            {'id':1, 'desc':`Cloud Storage`},
            {'id':2, 'desc':`Cloud Datastore`},
            {'id':3, 'desc':`Bigtable`},
        ],
        'answerId': [1],
        'rationale': [
            {'id':0, 'desc':`Cloud Storage is an object storage system well suited to stor- ing unstructured data`},]
    },
    {
        'id':218,
        'question':`A customer-facing application is built using a microservices architecture. One of the services does not scale as fast as the service that sends it data. This causes the sending service to wait while the other service processes the data. You would like to change the integration to use asynchronous instead of synchronous calls. What is one way to do this?`,
        'answers': [
            {'id':0, 'desc':`Create a Cloud Pub/Sub topic, have the sending service write data to the topic, and have the receiving service read from the topic.`},
            {'id':1, 'desc':`Create a Cloud Storage bucket, have the sending service write data to the topic, and have the receiving service read from the topic.`},
            {'id':2, 'desc':`Have the sending service write data to local drives, and have the receiving service read from those drives.`},
            {'id':3, 'desc':`Create a Bigtable database, have the sending service write data to the topic, and have the receiving service read from the topic.`},
        ],
        'answerId': [0],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':219,
        'question':`A product manager at TerramEarth would like to use the data that TerramEarth collects to predict when equipment will break down. What managed services would you recommend TerramEarth to consider?`,
        'answers': [
            {'id':0, 'desc':`Bigtable`},
            {'id':1, 'desc':`Cloud Dataflow`},
            {'id':2, 'desc':`Cloud AutoML`},
            {'id':3, 'desc':`Cloud Spanner`},
        ],
        'answerId': [2],
        'rationale': [
            {'id':0, 'desc':``},]
    },
];

export const set3 = [
    {
        'id':301,
        'question':`You are advising a customer on how to improve the availability of a data storage solution. Which of the following general strategies would you recommend?
        `,
        'answers': [
            {'id':0, 'desc':`Keeping redundant copies of the data`},
            {'id':1, 'desc':`Lowering the network latency for disk writes`},
            {'id':2, 'desc':`Using a NoSQL database`},
            {'id':3, 'desc':`Using Cloud Spanner`},
        ],
        'answerId': [0],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':302,
        'question':`A team of data scientists is analyzing archived data sets. The model building procedures run in batches. If the model building system is down for up to 30 minutes per day, it does not adversely impact the data scientists’ work. What is the minimal percentage availability among the following options that would meet this requirement?`,
        'answers': [
            {'id':0, 'desc':`99.99 percent`},
            {'id':1, 'desc':`99.90 percent`},
            {'id':2, 'desc':`99.00 percent`},
            {'id':3, 'desc':`99.999 percent`},
        ],
        'answerId': [2],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':303,
        'question':`Your development team has recently triggered three incidents that resulted in service disruptions. In one case, an engineer mistyped a number in a configuration file and in the other cases specified an incorrect disk configuration. What practices would you recommend to reduce the risk of these types of errors?`,
        'answers': [
            {'id':0, 'desc':`Continuous integration/continuous deployment`},
            {'id':1, 'desc':`Code reviews of configuration files`},
            {'id':2, 'desc':`Vulnerability scanning`},
            {'id':3, 'desc':`Improved access controls`},
        ],
        'answerId': [1],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':304,
        'question':`Your company is running multiple VM instances that have not had any downtime in the past several weeks. Recently, several of the physical servers suffered disk failures. The applications running on the servers did not have any apparent service disruptions. What feature of Compute Engine enabled that?`,
        'answers': [
            {'id':0, 'desc':`Preemptible VMs`},
            {'id':1, 'desc':`Live migration`},
            {'id':2, 'desc':`Canary deployments`},
            {'id':3, 'desc':`Redundant array of inexpensive disks`},
        ],
        'answerId': [1],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':305,
        'question':`You have deployed an application on an instance group. The application is not functioning correctly. What is a possible outcome?`,
        'answers': [
            {'id':0, 'desc':`The application shuts down when the instance group time-to-live (TTL) threshold is reached.`},
            {'id':1, 'desc':`The application shuts down when the health check fails.`},
            {'id':2, 'desc':`The VM shuts down when the instance group TTL threshold is reached and a new VM is started.`},
            {'id':3, 'desc':`The VM shuts down when the health check fails and a new VM is started.`},
        ],
        'answerId': [3],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':306,
        'question':`Mountkirk Games is growing its user base in North America, Europe, and Asia. Executives are concerned that players in Europe and Asia will have a degraded experience if the game backend runs only in North America. What would you suggest as a way to improve latency and game experience for users in Europe and Asia?`,
        'answers': [
            {'id':0, 'desc':`Use Cloud Spanner to have a globally consistent, horizontally scalable relational database.`},
            {'id':1, 'desc':`Create instance groups running the game backend in multiple regions across North America, Europe, and Asia. Use global load balancing to distribute the workload.`},
            {'id':2, 'desc':`Use Standard Tier networking to ensure that data sent between regions is routed over the public Internet.`},
            {'id':3, 'desc':`Use a Cloud Memorystore cache in front of the database to reduce database read latency.`},
        ],
        'answerId': [1],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':307,
        'question':`What configuration changes are required to ensure high availability when using Cloud
        Storage or Cloud Filestore?`,
        'answers': [
            {'id':0, 'desc':`A sufficiently long TTL must be set.`},
            {'id':1, 'desc':`A health check must be specified.`},
            {'id':2, 'desc':`Both a TTL and health check must be specified.`},
            {'id':3, 'desc':`Nothing. Both are managed services. GCP manages high availability.`},
        ],
        'answerId': [3],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':308,
        'question':`The finance director in your company is frustrated with the poor availability of an on-premises finance data warehouse. The data warehouse uses a commercial relational database that only scales by buying larger and larger servers. The director asks for your advice about moving the data warehouse to the cloud and if the company can continue to use SQL to query the data warehouse. What GCP service would you recommend to replace the on-premises data warehouse?`,
        'answers': [
            {'id':0, 'desc':`Bigtable`},
            {'id':1, 'desc':`BigQuery`},
            {'id':2, 'desc':`Cloud Datastore`},
            {'id':3, 'desc':`Cloud Storage`},
        ],
        'answerId': [1],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':309,
        'question':`TerramEarth has determined that it wants to use Cloud Bigtable to store equipment telemetry data transmitted over their cellular network. They have also concluded that they want two clusters in different regions. Both clusters should be able to respond to read and write requests. What kind of replication should be used?`,
        'answers': [
            {'id':0, 'desc':`Primary–hot primary`},
            {'id':1, 'desc':`Primary–warm primary`},
            {'id':2, 'desc':`Primary–primary`},
            {'id':3, 'desc':`Primary read–primary write`},
        ],
        'answerId': [2],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':310,
        'question':`Your company is implementing a hybrid cloud computing model. Line-of-business owners are concerned that data stored in the cloud may not be available to on-premises applications. The current network connection is using a maximum of 40 percent of bandwidth. What would you suggest to mitigate the risk of that kind of service failure?`,
        'answers': [
            {'id':0, 'desc':`Configure firewall rules to improve availability.`},
            {'id':1, 'desc':`Use redundant network connections between the on-premises data center and Google Cloud.`},
            {'id':2, 'desc':`Increase the number of VMs allowed in Compute Engine instance groups.`},
            {'id':3, 'desc':`Increase the bandwidth of the network connection between the data center and Google Cloud.`},
        ],
        'answerId': [1],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':311,
        'question':`A team of architects in your company is defining standards to improve availability. In addition to recommending redundancy and code reviews for configuration changes, what would you recommend to include in the standards?`,
        'answers': [
            {'id':0, 'desc':`Use of access controls`},
            {'id':1, 'desc':`Use of managed services for all compute requirements`},
            {'id':2, 'desc':`Use of Stackdriver monitoring to alert on changes in application performance`},
            {'id':3, 'desc':`Use of Bigtable to collect performance monitoring data`},
        ],
        'answerId': [2],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':312,
        'question':`Why would you want to run long-running, compute-intensive backend computation in a different managed instance group than on web servers supporting a minimal user interface?`,
        'answers': [
            {'id':0, 'desc':`Managed instance groups can run only a single application.`},
            {'id':1, 'desc':`Managed instance groups are optimized for either compute or HTTP connectivity.`},
            {'id':2, 'desc':`Compute-intensive applications have different scaling characteristics from those of lightweight user interface applications.`},
            {'id':3, 'desc':`There is no reason to run the applications in different managed instance groups.`},
        ],
        'answerId': [2],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':313,
        'question':`An instance group is adding more VMs than necessary and then shutting them down. This pattern is happening repeatedly. What would you do to try to stabilize the addition and removal of VMs?`,
        'answers': [
            {'id':0, 'desc':`Increase the maximum number of VMs in the instance group.`},
            {'id':1, 'desc':`Decrease the minimum number of VMs in the instance group.`},
            {'id':2, 'desc':`Increase the time autoscalers consider when making decisions.`},
            {'id':3, 'desc':`Decrease the time autoscalers consider when making decisions.`},
        ],
        'answerId': [2],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':314,
        'question':`Dress4Win has just developed a new feature for its social networking service. Customers can upload images of their clothes, create montages from those images, and share them
        on social networking sites. Images are temporarily saved to locally attached drives as the customer works on the montage. When the montage is complete, the final version is copied to a Cloud Storage bucket. The services implementing this feature run in a managed instance group. Several users have noted that their final montages are not available even though they saved them in the application. No other problems have been reported with the service. What might be causing this problem?`,
        'answers': [
            {'id':0, 'desc':`The Cloud Storage bucket is out of storage.`},
            {'id':1, 'desc':`The locally attached drive does not have a filesystem.`},
            {'id':2, 'desc':`The users experiencing the problem were using a VM that was shut down by an autoscaler, and a cleanup script did not run to copy the latest version of the montage to Cloud Storage.`},
            {'id':3, 'desc':`The network connectivity between the VMs and Cloud Storage has failed.`},
        ],
        'answerId': [2],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':315,
        'question':`Kubernetes uses several abstractions to model and manage computation and applications. What is the progression of abstractions from the lowest to the highest level ?`,
        'answers': [
            {'id':0, 'desc':`Pods →Deployments →Services`},
            {'id':1, 'desc':`Pods →Services →Deployments`},
            {'id':2, 'desc':`Deployments →Services →Pods`},
            {'id':3, 'desc':`Deployments →Pods →Services`},
        ],
        'answerId': [0],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':316,
        'question':`Your development team has implemented a new application using a microservices architecture. You would like to minimize DevOps overhead by deploying the services in a way that will autoscale. You would also like to run each microservice in containers. What is a good option for implementing these requirements in Google Cloud Platform?`,
        'answers': [
            {'id':0, 'desc':`Run the containers in Cloud Functions.`},
            {'id':1, 'desc':`Run the containers in Kubernetes Engine.`},
            {'id':2, 'desc':`Run the containers in Cloud Dataproc.`},
            {'id':3, 'desc':`Run the containers in Cloud Dataflow.`},
        ],
        'answerId': [1],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':317,
        'question':`TerramEarth is considering building an analytics database and making it available to equipment designers. The designers require the ability to query the data with SQL. The analytics database manager wants to minimize the cost of the service. What would you recommend?`,
        'answers': [
            {'id':0, 'desc':`Use BigQuery as the analytics database, and partition the data to minimize the amount of data scanned to answer queries.`},
            {'id':1, 'desc':`Use Bigtable as the analytics database, and partition the data to minimize the amount of data scanned to answer queries.`},
            {'id':2, 'desc':`Use BigQuery as the analytics database, and use data federation to minimize the amount of data scanned to answer queries.`},
            {'id':3, 'desc':`Use Bigtable as the analytics database, and use data federation to minimize the amount of data scanned to answer queries.`},
        ],
        'answerId': [0],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':318,
        'question':`Line-of-business owners have decided to move several applications to the cloud. They believe the cloud will be more reliable, but they want to collect data to test their hypothesis. What is a common measure of reliability that they can use?`,
        'answers': [
            {'id':0, 'desc':`Mean time to recovery`},
            {'id':1, 'desc':`Mean time between failures`},
            {'id':2, 'desc':`Mean time between deployments`},
            {'id':3, 'desc':`Mean time between errors`},
        ],
        'answerId': [1],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':319,
        'question':`A group of business executives and software engineers are discussing the level of risk that is acceptable for a new application. Business executives want to minimize the risk that the service is not available. Software engineers note that the more developer time dedicated to reducing risk of disruption, the less time they have to implement new features. How can you formalize the group’s tolerance for risk of disruption?`,
        'answers': [
            {'id':0, 'desc':`Request success rate`},
            {'id':1, 'desc':`Uptime of service`},
            {'id':2, 'desc':`Latency`},
            {'id':3, 'desc':`Throughput`},
        ],
        'answerId': [0],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':320,
        'question':`Your DevOps team recently determined that it needed to increase the size of persistent disks used by VMs running a business-critical application. When scaling up the size of available persistent storage for a VM, what other step may be required?`,
        'answers': [
            {'id':0, 'desc':`Adjusting the filesystem size in the operating system`},
            {'id':1, 'desc':`Backing up the persistent disk before changing its size`},
            {'id':2, 'desc':`Changing the access controls on files on the disk`},
            {'id':3, 'desc':`Update disk metadata, including labels`},
        ],
        'answerId': [0],
        'rationale': [
            {'id':0, 'desc':``},]
    },
];

export const set4 = [
    {
        'id':401,
        'question':`You are consulting for a client that is considering moving some on-premises workloads to the Google Cloud Platform. The workloads are currently running on VMs that use a specially hardened operating system. Application administrators will need root access to the operating system as well. The client wants to minimize changes to the existing configura- tion. Which GCP compute service would you recommend?`,
        'answers': [
            {'id':0, 'desc':`Compute Engine`},
            {'id':1, 'desc':`Kubernetes Engine`},
            {'id':2, 'desc':`App Engine Standard`},
            {'id':3, 'desc':`App Engine Flexible`},
        ],
        'answerId': [1],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':402,
        'question':`You have just joined a startup that analyzes healthcare data and makes recommendations to healthcare providers to improve the quality of care while controlling costs. You have to comply with privacy regulations. A compliance consultant recommends that your startup control encryption keys used to encrypt data stored on cloud servers. You’d rather have GCP manage all encryption components to minimize your work and infrastructure man- agement responsibilities. What would you recommend?`,
        'answers': [
            {'id':0, 'desc':`Use default encryption enabled on Compute Engine instances.`},
            {'id':1, 'desc':`Use Google Cloud Key Management Service to store keys that you create and use them to encrypt storage used with Compute Engine instances.`},
            {'id':2, 'desc':`Implement a trusted key store on premises, create the keys yourself, and use them to encrypt storage used with Compute Engine instances.`},
            {'id':3, 'desc':`Use an encryption algorithm that does not use keys.`},
        ],
        'answerId': [1],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':403,
        'question':`A colleague complains that the availability and reliability of GCP VMs is poor because their instances keep shutting down with them issuing shutdown commands. No instance has run for more than 24 hours without shutting down for some reason. What would you suggest your colleague check to understand why the instances may be shutting down?`,
        'answers': [
            {'id':0, 'desc':`Make sure that the Stackdriver agent is installed and collecting metrics.`},
            {'id':1, 'desc':`Verify that sufficient persistent storage is attached to the instance.`},
            {'id':2, 'desc':`Make sure that the instance availability is not set to preemptible.`},
            {'id':3, 'desc':`Ensure that an external IP address has been assigned to the instance.
`},
        ],
        'answerId': [1],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':404,
        'question':`Your company is working on a government contract that requires all instances of VMs to have a virtual Trusted Platform Module. What Compute Engine configuration option would you enable or disable your instances?`,
        'answers': [
            {'id':0, 'desc':`Trusted Module Setting`},
            {'id':1, 'desc':`Shielded VMs`},
            {'id':2, 'desc':`Preemptible VMs`},
            {'id':3, 'desc':`Disable live migration`},
        ],
        'answerId': [1],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':405,
        'question':`You are leading a lift-and-shift migration to the cloud. Your company has several load-bal- anced clusters that use VMs that are not identically configured. You want to make as few changes as possible when moving workloads to the cloud. What feature of GCP would you use to implement those clusters in the cloud?`,
        'answers': [
            {'id':0, 'desc':`Managed instance groups`},
            {'id':1, 'desc':`Unmanaged instance groups`},
            {'id':2, 'desc':`Flexible instance groups`},
            {'id':3, 'desc':`Kubernetes clusters
`},
        ],
        'answerId': [1],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':406,
        'question':`Your startup has a stateless web application written in Python 3.7 You are not sure what kind of load to expect on the application. You do not want to manage servers or containers if you can avoid it. What GCP service would you use?`,
        'answers': [
            {'id':0, 'desc':`Compute Engine`},
            {'id':1, 'desc':`App Engine`},
            {'id':2, 'desc':`Kubernetes Engine`},
            {'id':3, 'desc':`Cloud Dataproc
`},
        ],
        'answerId': [1],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':407,
        'question':`Your department provides audio transcription services for other departments in your com- pany. Users upload audio files to a Cloud Storage bucket. Your application transcribes the audio and writes the transcript file back to the same bucket. Your process runs every day at midnight and transcribes all files in the bucket. Users are complaining that they are not notified if there is a problem with the audio file format until the next day. Your application has a program that can verify the quality of an audio file in less than two seconds. What changes would you make to the workflow to improve user satisfaction?`,
        'answers': [
            {'id':0, 'desc':`Include more documentation about what is required to transcribe an audio file successfully.`},
            {'id':1, 'desc':`Use Cloud Functions to run the program to verify the quality of the audio file when the file is uploaded. If there is a problem, notify the user immediately.`},
            {'id':2, 'desc':`Create a Compute Engine instance and set up a cron job that runs every hour to check the quality of files that have been uploaded into the bucket in the last hour. Send notices to all users who have uploaded files that do not pass the quality control check.`},
            {'id':3, 'desc':`Use the App Engine Cron service to set up a cron job that runs every hour to check the quality of files that have been uploaded into the bucket in the last hour. Send notices to all users who have uploaded files that do not pass the quality control check.
`},
        ],
        'answerId': [1],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':408,
        'question':`You have inherited a monolithic Ruby application that you need to keep running. There will be minimal changes, if any, to the code. The previous developer who worked with this application created a Dockerfile and image container with the application and needed libraries. You’d like to deploy this in a way that minimizes your effort to maintain it. How would you deploy this application?`,
        'answers': [
            {'id':0, 'desc':`Create an instance in Compute Engine, install Docker, install the Stackdriver agent, and then run the Docker image.`},
            {'id':1, 'desc':`Create an instance in Compute Engine, but do not use the Docker image. Install the application, Ruby, and needed libraries. Install the Stackdriver agent. Run the application directly in the VM, not a container.`},
            {'id':2, 'desc':`Use App Engine Flexible to run the container image. App Engine will monitor as needed.`},
            {'id':3, 'desc':`Use App Engine Standard to run the container image. App Engine will monitor as needed.
`},
        ],
        'answerId': [1],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':409,
        'question':`You have been asked to give a presentation on Kubernetes. How would you explain the difference between the cluster master and nodes?`,
        'answers': [
            {'id':0, 'desc':`Cluster masters manage the cluster and run core services such as the controller manager, API server, scheduler, and etcd. Nodes run workload jobs.`},
            {'id':1, 'desc':`The cluster manager is an endpoint for API calls. All services needed to maintain a cluster are run on nodes.`},
            {'id':2, 'desc':`The cluster manager is an endpoint for API calls. All services needed to maintain a cluster are run on nodes, and workloads are run on a third kind of server, a runner.`},
            {'id':3, 'desc':`Cluster masters manage the cluster and run core services such as the controller manager, API server, scheduler, and etcd. Nodes monitor the cluster master and restart it if it fails.
`},
        ],
        'answerId': [1],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':410,
        'question':`External services are not able to access services running in a Kubernetes cluster. You suspect a controller may be down. Which type of controller would you check?`,
        'answers': [
            {'id':0, 'desc':`Pod`},
            {'id':1, 'desc':`Deployment`},
            {'id':2, 'desc':`Ingress Controller D. Service Controller
`},
        ],
        'answerId': [1],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':411,
        'question':`You are planning to run stateful applications in Kubernetes Engine. What should you use to support stateful applications?`,
        'answers': [
            {'id':0, 'desc':`Pods`},
            {'id':1, 'desc':`StatefulPods`},
            {'id':2, 'desc':`StatefulSets`},
            {'id':3, 'desc':`PersistentStorageSets
`},
        ],
        'answerId': [1],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':412,
        'question':`Every time a database administrator logs into a Firebase database, you would like a message sent to your mobile device. Which compute service could you use that would minimize your work in deploying and running the code that sends the message?`,
        'answers': [
            {'id':0, 'desc':`Compute Engine`},
            {'id':1, 'desc':`Kubernetes Engine`},
            {'id':2, 'desc':`Cloud Functions`},
            {'id':3, 'desc':`Cloud Dataflow
`},
        ],
        'answerId': [1],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':413,
        'question':`Your team has been tasked with deploying infrastructure for development, test, staging, and production environments in region us-west13. You will likely need to deploy the same set of environments in two additional regions. What service would allow you to use an Infrastructure as code (IaC) approach?`,
        'answers': [
            {'id':0, 'desc':`Cloud Dataflow`},
            {'id':1, 'desc':`Deployment Manager`},
            {'id':2, 'desc':`Identity and Access Manager`},
            {'id':3, 'desc':`App Engine Flexible`},
        ],
        'answerId': [1],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':414,
        'question':`An IoT startup collects streaming data from industrial sensors and evaluates the data for anomalies using a machine learning model. The model scales horizontally. The data col- lected is buffered in a server for 10 minutes. Which of the following is a true statement about the system?`,
        'answers': [
            {'id':0, 'desc':`It is stateful.`},
            {'id':1, 'desc':`It is stateless.`},
            {'id':2, 'desc':`It may be stateful or stateless, there is not enough information to determine.`},
            {'id':3, 'desc':`It is neither stateful nor stateless.`},
        ],
        'answerId': [1],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':415,
        'question':`Your team is designing a stream processing application that collects temperature and pres- sure measurements from industrial sensors. You estimate that for the initial release, the application will need 8 to 12 n1-highmem-32 instances. Someone on the team suggests using a Cloud Memorystore cache. What could that cache be used for?`,
        'answers': [
            {'id':0, 'desc':`A SQL database`},
            {'id':1, 'desc':`As a memory cache to store state data outside of instances`},
            {'id':2, 'desc':`An extraction, transformation, and load service`},
            {'id':3, 'desc':`A persistent object storage system`},
        ],
        'answerId': [1],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':416,
        'question':`A distributed application is not performing as well as expected during peak load periods. The application uses three microservices. The first of the microservices has the ability to send more data to the second service than the second service can process and keep up with. This causes the first microservice to wait while the second service processes data. What can be done to decouple the first service from the second service?`,
        'answers': [
            {'id':0, 'desc':`Run the microservices on separate instances.`},
            {'id':1, 'desc':`Run the microservices in a Kubernetes cluster.`},
            {'id':2, 'desc':`Write data from the first service to a Cloud Pub/Sub topic and have the second service read the data from the topic.`},
            {'id':3, 'desc':`Scale both services together using MIGs.`},
        ],
        'answerId': [1],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':417,
        'question':`A colleague has suggested that you use the Apache Beam framework for implementing a
highly scalable workflow. Which Google Cloud service would you use?`,
        'answers': [
            {'id':0, 'desc':`Cloud Dataproc`},
            {'id':1, 'desc':`Cloud Dataflow`},
            {'id':2, 'desc':`Cloud Dataprep`},
            {'id':3, 'desc':`Cloud Memorystore`},
        ],
        'answerId': [1],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':418,
        'question':`Your manager wants more data on the performance of applications running in Compute Engine, specifically, data on CPU and memory utilization. What Google Cloud service would you use to collect that data?`,
        'answers': [
            {'id':0, 'desc':`Cloud Dataprep`},
            {'id':1, 'desc':`Stackdriver`},
            {'id':2, 'desc':`Cloud Dataproc`},
            {'id':3, 'desc':`Cloud Memorystore`},
        ],
        'answerId': [1],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':419,
        'question':`You are receiving alerts that CPU utilization is high on several Compute Engine instances. The instances are all running a custom C++ application. When you receive these alerts, you deploy an additional instance running the application. A load balancer automatically dis- tributes the workload across all of the instances. What is the best option to avoid having to add servers manually when CPU utilization is high?`,
        'answers': [
            {'id':0, 'desc':`Always run more servers than needed to avoid high CPU utilization.`},
            {'id':1, 'desc':`Deploy the instances in a MIG, and use autoscaling to add and remove instances as needed.`},
            {'id':2, 'desc':`Run the application in App Engine Standard.`},
            {'id':3, 'desc':`Whenever you receive an alert, add two instances instead of one.`},
        ],
        'answerId': [1],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':420,
        'question':`A retailer has sales data streaming into a Cloud Pub/Sub topic from stores across the coun- try. Each time a sale is made, data is sent from the point of sale to Google Cloud. The data needs to be transformed and aggregated before it is written to BigQuery. What service would you use to perform that processing and write data to BigQuery?`,
        'answers': [
            {'id':0, 'desc':`Firebase`},
            {'id':1, 'desc':`Cloud Dataflow`},
            {'id':2, 'desc':`Cloud Memorystore`},
            {'id':3, 'desc':`Cloud Datastore`},
        ],
        'answerId': [1],
        'rationale': [
            {'id':0, 'desc':``},]
    }
];

export const set5 = [
    {
        'id':501,
        'question':`You need to store a set of files for an extended period of time. Anytime the data in the files needs to be accessed, it will be copied to a server first, and then the data will be accessed. Files will not be accessed more than once a year. The set of files will all have the same access controls. What storage solution would you use to store these files?`,
        'answers': [
            {'id':0, 'desc':`Cloud Storage Coldline`},
            {'id':1, 'desc':`B. Cloud Storage Nearline`},
            {'id':2, 'desc':`C. Cloud Filestore`},
            {'id':3, 'desc':`D. Bigtable`},
        ],
        'answerId': [0],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':502,
        'question':`You are uploading files in parallel to Cloud Storage and want to optimize load perfor- mance. What could you do to avoid creating hotspots when writing files to Cloud Storage?`,
        'answers': [
            {'id':0, 'desc':`Use sequential names or timestamps for files.`},
            {'id':1, 'desc':`B. Do not use sequential names or timestamps for files.`},
            {'id':2, 'desc':`C. Configure retention policies to ensure that files are not deleted prematurely.`},
            {'id':3, 'desc':`D. Configure lifecycle policies to ensure that files are always using the most appropriate storage class.`},
        ],
        'answerId': [1],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':503,
        'question':`As a consultant on a cloud migration project, you have been asked to recommend a strategy for storing files that must be highly available even in the event of a regional failure. What would you recommend?`,
        'answers': [
            {'id':0, 'desc':`BigQuery`},
            {'id':1, 'desc':`B. Cloud Datastore`},
            {'id':2, 'desc':`C. Multiregional Cloud Storage`},
            {'id':3, 'desc':`D. Regional Cloud Storage`},
        ],
        'answerId': [2],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':504,
        'question':`As part of a migration to Google Cloud Platform, your department will run a collabora- tion and document management application on Compute Engine virtual machines. The application requires a filesystem that can be mounted using operating system commands. All documents should be accessible from any instance. What storage solution would you recommend?`,
        'answers': [
            {'id':0, 'desc':`Cloud Storage`},
            {'id':1, 'desc':`B. Cloud Filestore`},
            {'id':2, 'desc':`C. A document database`},
            {'id':3, 'desc':`D. A relational database`},
        ],
        'answerId': [1],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':505,
        'question':`Your team currently supports seven MySQL databases for transaction processing applica- tions. Management wants to reduce the amount of staff time spent on database administra- tion. What GCP service would you recommend to help reduce the database administration load on your teams?`,
        'answers': [
            {'id':0, 'desc':`Bigtable`},
            {'id':1, 'desc':`B. BigQuery`},
            {'id':2, 'desc':`C. Cloud SQL`},
            {'id':3, 'desc':`D. Cloud Filestore`},
        ],
        'answerId': [2],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':506,
        'question':`Your company is developing a new service that will have a global customer base. The ser- vice will generate large volumes of structured data and require the support of a transaction processing database. All users, regardless of where they are on the globe, must have a con- sistent view of data. What storage system will meet these requirements?`,
        'answers': [
            {'id':0, 'desc':`Cloud Spanner`},
            {'id':1, 'desc':`B. Cloud SQL`},
            {'id':2, 'desc':`C. Cloud Storage`},
            {'id':3, 'desc':`D. BigQuery`},
        ],
        'answerId': [0],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':507,
        'question':`Your company is required to comply with several government and industry regulations, which include encrypting data at rest. What GCP storage services can be used for applica- tions subject to these regulations?`,
        'answers': [
            {'id':0, 'desc':`Bigtable and BigQuery only`},
            {'id':1, 'desc':`B. Bigtable and Cloud Storage only`},
            {'id':2, 'desc':`C. Any of the managed databases, but no other storage services`},
            {'id':3, 'desc':`D. Any GCP storage service`},
        ],
        'answerId': [3],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':508,
        'question':`As part of your role as a data warehouse administrator, you occasionally need to export data from the data warehouse, which is implemented in BigQuery. What command-line tool would you use for that task?`,
        'answers': [
            {'id':0, 'desc':`gsutil`},
            {'id':1, 'desc':`B. gcloud`},
            {'id':2, 'desc':`C. bq`},
            {'id':3, 'desc':`D. cbt`},
        ],
        'answerId': [2],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':509,
        'question':`Another task that you perform as data warehouse administrator is granting authorizations to perform tasks with the BigQuery data warehouse. A user has requested permission to view table data but not change it. What role would you grant to this user to provide the needed permissions but nothing more?`,
        'answers': [
            {'id':0, 'desc':`dataViewer`},
            {'id':1, 'desc':`B. admin`},
            {'id':2, 'desc':`C. metadataViewer`},
            {'id':3, 'desc':`D. dataOwner`},
        ],
        'answerId': [0],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':510,
        'question':`A developer is creating a set of reports and is trying to minimize the amount of data each query returns while still meeting all requirements. What bq command-line option will help you understand the amount of data returned by a query without actually executing the query?`,
        'answers': [
            {'id':0, 'desc':`--no-data`},
            {'id':1, 'desc':`B. --estimate-size`},
            {'id':2, 'desc':`C. --dry-run`},
            {'id':3, 'desc':`D. --size`},
        ],
        'answerId': [2],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':511,
        'question':`A team of developers is choosing between using NoSQL or a relational database. What is a feature of NoSQL databases that is not available in relational databases?`,
        'answers': [
            {'id':0, 'desc':`Fixed schemas`},
            {'id':1, 'desc':`B. ACID transactions`},
            {'id':2, 'desc':`C. Indexes`},
            {'id':3, 'desc':`D. Flexible schemas`},
        ],
        'answerId': [3],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':512,
        'question':`A group of venture capital investors have hired you to review the technical design of a ser- vice that will be developed by a startup company seeking funding. The startup plans to col- lect data from sensors attached to vehicles. The data will be used to predict when a vehicle needs maintenance and before the vehicle breaks down. Thirty sensors will be on each vehi- cle. Each sensor will send up to 5K of data every second. The startup expects to start with hundreds of vehicles, but it plans to reach 1 million vehicles globally within 18 months. The data will be used to develop machine learning models to predict the need for maintenance. The startup is planning to use a self-managed relational database to store the time-series data. What would you recommend for a time-series database?`,
        'answers': [
            {'id':0, 'desc':`Continue to plan to use a self-managed relational database.`},
            {'id':1, 'desc':`B. Use a Cloud SQL.`},
            {'id':2, 'desc':`C. Use Cloud Spanner.`},
            {'id':3, 'desc':`D. Use Bigtable.`},
        ],
        'answerId': [3],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':513,
        'question':`A Bigtable instance increasingly needs to support simultaneous read and write operations. You’d like to separate the workload so that some nodes respond to read requests and oth- ers respond to write requests. How would you implement this to minimize the workload on developers and database administrators?`,
        'answers': [
            {'id':0, 'desc':`Create two instances, and separate the workload at the application level.`},
            {'id':1, 'desc':`B. Create multiple clusters in the Bigtable instance, and use Bigtable replication to keep
            the clusters synchronized.`},
            {'id':2, 'desc':`C. Create multiple clusters in the Bigtable instance, and use your own replication program to keep the clusters synchronized.`},
            {'id':3, 'desc':`D. It is not possible to accomplish the partitioning of the workload as described.`},
        ],
        'answerId': [2],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':514,
        'question':`As a database architect, you’ve been asked to recommend a database service to support an application that will make extensive use of JSON documents. What would you recommend to minimize database administration overhead while minimizing the work required for developers to store JSON data in the database?`,
        'answers': [
            {'id':0, 'desc':`Cloud Storage`},
            {'id':1, 'desc':`B. Cloud Datastore`},
            {'id':2, 'desc':`C. Cloud Spanner`},
            {'id':3, 'desc':`D. Cloud SQL`},
        ],
        'answerId': [2],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':515,
        'question':`Your Cloud SQL database is close to maximizing the number of read operations that it can perform. You could vertically scale the database to use a larger instance, but you do not need additional write capacity. What else could you try to reduce the number of reads performed by the database?`,
        'answers': [
            {'id':0, 'desc':`Switch to Cloud Spanner.`},
            {'id':1, 'desc':`B. Use Cloud Bigtable instead.`},
            {'id':2, 'desc':`C. Use Cloud Memorystore to create a database cache that stores the results of database queries. Before a query is sent to the database, the cache is checked for the answer to the query.`},
            {'id':3, 'desc':`D. There is no other option—you must vertically scale.`},
        ],
        'answerId': [3],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':516,
        'question':`You would like to move objects stored in Cloud Storage automatically from regional storage to Nearline storage when the object is 6 months old. What feature of Cloud Storage would you use?`,
        'answers': [
            {'id':0, 'desc':`Retention policies`},
            {'id':1, 'desc':`B. Lifecycle policies`},
            {'id':2, 'desc':`C. Bucket locks`},
            {'id':3, 'desc':`D. Multiregion replication`},
        ],
        'answerId': [2],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':517,
        'question':`A customer has asked for help with a web application. Static data served from a data center in Chicago in the United States loads slowly for users located in Australia, South Africa, and Southeast Asia. What would you recommend to reduce latency?`,
        'answers': [
            {'id':0, 'desc':`Distribute data using Cloud CDN.`},
            {'id':1, 'desc':`B. Use Premium Network from the server in Chicago to client devices.`},
            {'id':2, 'desc':`C. Scale up the size of the web server.`},
            {'id':3, 'desc':`D. Move the server to a location closer to users.`},
        ],
        'answerId': [0],
        'rationale': [
            {'id':0, 'desc':``},]
        },
];

export const set6 = [
    {
        'id':601,
        'question':`Your team has deployed a VPC with default subnets in all regions. The lead network archi- tect at your company is concerned about possible overlap in the use of private addresses. How would you explain how you are dealing with the potential problem?`,
        'answers': [
            {'id':0, 'desc':`You inform the network architect that you are not using private addresses at all.`},
            {'id':1, 'desc':`When default subnets are created for a VPC, each region is assigned a different IPaddress range.`},
            {'id':2, 'desc':`You have increased the size of the subnet mask in the CIDR block specification of the set of IP addresses.`},
            {'id':3, 'desc':`You agree to assign new IP address ranges on all subnets.`},
        ],
        'answerId': [1],
        'rationale': []
    },
    {
        'id':602,
        'question':`A data warehouse service running in GCP has all of its resources in a single project.
        The e-commerce application has resources in another project, including a database with transaction data that will be loaded into the data warehouse. The data warehousing team would like to read data directly from the database using extraction, transformation, and load processes that run on Compute Engine instances in the data warehouse project. Which of the following network constructs could help with this?`,
        'answers': [
            {'id':0, 'desc':`Shared VPC`},
            {'id':1, 'desc':`Regional load balancing`},
            {'id':2, 'desc':`Direct peering`},
            {'id':3, 'desc':`Cloud VPN`},
        ],
        'answerId': [0],
        'rationale': []
    },
    {
        'id':603,
        'question':`An intern working with your team has changed some firewall rules. Prior to the change, all Compute Engine instances on the network could connect to all other instances on the net- work. After the change, some nodes cannot reach other nodes. What might have been the change that causes this behavior?`,
        'answers': [
            {'id':0, 'desc':`One or more implied rules were deleted.`},
            {'id':1, 'desc':`The default-allow-internal rule was deleted.`},
            {'id':2, 'desc':`The default-all-icmp rule was deleted.`},
            {'id':3, 'desc':`The priority of a rule was set higher than 65535.`},
        ],
        'answerId': [1],
        'rationale': []
    },
    {
        'id':604,
        'question':`The network administrator at your company has asked that you configure a firewall rule that will always take precedence over any other firewall rule. What priority would you assign?`,
        'answers': [
            {'id':0, 'desc':`0`},
            {'id':1, 'desc':`1`},
            {'id':2, 'desc':`65534`},
            {'id':3, 'desc':`65535`},
        ],
        'answerId': [0],
        'rationale': []
    },
    {
        'id':605,
        'question':`During a review of a GCP network configuration, a developer asks you to explain CIDR notation. Specifically, what does the 8 mean in the CIDR block 172.16.10.2/8?`,
        'answers': [
            {'id':0, 'desc':`8 is the number of bits used to specify a host address.`},
            {'id':1, 'desc':`8 is the number of bits used to specify the subnet mask.`},
            {'id':2, 'desc':`8 is the number of octets used to specify a host address.`},
            {'id':3, 'desc':`8 is the number of octets used to specify the subnet mask.`},
        ],
        'answerId': [1],
        'rationale': []
    },
    {
        'id':606,
        'question':`Several new firewall rules have been added to a VPC. Several users are reporting unusual problems with applications that did not occur before the firewall rule changes. You’d like to debug the firewall rules while causing the least impact on the network and doing so as quickly as possible. Which of the following options is best?`,
        'answers': [
            {'id':0, 'desc':`Set all new firewall priorities to 0 so that they all take precedence over other rules.`},
            {'id':1, 'desc':`Set all new firewall priorities to 65535 so that all other rules take precedence over these rules.`},
            {'id':2, 'desc':`Disable one rule at a time to see whether that eliminates the problems. If needed, disable combinations of rules until the problems are eliminated.`},
            {'id':3, 'desc':`Remove all firewall rules and add them back one at a time until the problems occur and then remove the latest rule added back.`},
        ],
        'answerId': [2],
        'rationale': []
    },
    {
        'id':607,
        'question':`An executive wants to understand what changes in the current cloud architecture are required to run compute-intensive machine learning workloads in the cloud and have the models run in production using on-premises servers. The models are updated daily. There is no network connectivity between the cloud and on-premises networks. What would you tell the executive?`,
        'answers': [
            {'id':0, 'desc':`Implement additional firewall rules`},
            {'id':1, 'desc':`Use global load balancing`},
            {'id':2, 'desc':`Use hybrid-cloud networking`},
            {'id':3, 'desc':`Use regional load balancing`},
        ],
        'answerId': [2],
        'rationale': []
    },
    {
        'id':608,
        'question':`To comply with regulations, you need to deploy a disaster recovery site that has the same design and configuration as your production environment. You want to implement the disaster recovery site in the cloud. Which topology would you use?`,
        'answers': [
            {'id':0, 'desc':`Gated ingress topology`},
            {'id':1, 'desc':`Gated egress topology`},
            {'id':2, 'desc':`Handover topology`},
            {'id':3, 'desc':`Mirrored topology`},
        ],
        'answerId': [3],
        'rationale': []
    },
    {
        'id':609,
        'question':`Network engineers have determined that the best option for linking the on-premises network to GCP resources is by using an IPsec VPN. Which GCP service would you use in the cloud?`,
        'answers': [
            {'id':0, 'desc':`Cloud IPsec`},
            {'id':1, 'desc':`Cloud VPN`},
            {'id':2, 'desc':`Cloud Interconnect IPsec`},
            {'id':3, 'desc':`Cloud VPN IKE`},
        ],
        'answerId': [1],
        'rationale': []
    },
    {
        'id':610,
        'question':`Network engineers have determined that a link between the on-premises network and GCP
        will require an 8 Gbps connection. Which option would you recommend?`,
        'answers': [
            {'id':0, 'desc':`Cloud VPN`},
            {'id':1, 'desc':`Partner Interconnect`},
            {'id':2, 'desc':`Direct Interconnect`},
            {'id':3, 'desc':`Hybrid Interconnect`},
        ],
        'answerId': [1],
        'rationale': []
    },
    {
        'id':611,
        'question':`Network engineers have determined that a link between the on-premises network and GCP will require a connection between 60 Gbps and 80 Gbps. Which hybrid-cloud networking services would best meet this requirement?`,
        'answers': [
            {'id':0, 'desc':`Cloud VPN`},
            {'id':1, 'desc':`Cloud VPN and Direct Interconnect`},
            {'id':2, 'desc':`Direct Interconnect and Partner Interconnect`},
            {'id':3, 'desc':`Cloud VPN, Direct Interconnect, and Partner Interconnect`},
        ],
        'answerId': [2],
        'rationale': []
    },
    {
        'id':612,
        'question':`The director of network engineering has determined that any links to networks outside of the company data center will be implemented at the level of BGP routing exchanges. What hybrid-cloud networking option should you use?
        `,
        'answers': [
            {'id':0, 'desc':`Direct peering`},
            {'id':1, 'desc':`Indirect peering`},
            {'id':2, 'desc':`Global load balancing`},
            {'id':3, 'desc':`Cloud IKE`},
        ],
        'answerId': [0],
        'rationale': []
    },
    {
        'id':613,
        'question':`A startup is designing a social site dedicated to discussing global political, social, and environmental issues. The site will include news and opinion pieces in text and video. The startup expects that some stories will be exceedingly popular, and others won’t be, but they want to ensure that all users have a similar experience with regard to latency, so they plan to replicate content across regions. What load balancer should they use?`,
        'answers': [
            {'id':0, 'desc':`HTTP(S)`},
            {'id':1, 'desc':`SSL Proxy`},
            {'id':2, 'desc':`Internal TCP/UDP`},
            {'id':3, 'desc':`TCP Proxy`},
        ],
        'answerId': [0],
        'rationale': []
    },
    {
        'id':614,
        'question':`As a developer, you foresee the need to have a load balancer that can distribute load using only private RFC 1918 addresses. Which load balancer would you use?`,
        'answers': [
            {'id':0, 'desc':`Internal TCP/UDP`},
            {'id':1, 'desc':`HTTP(S)`},
            {'id':2, 'desc':`SSL Proxy`},
            {'id':3, 'desc':`TCP Proxy`},
        ],
        'answerId': [0],
        'rationale': []
    },
    {
        'id':615,
        'question':`After a thorough review of the options, a team of developers and network engineers have determined that the SSL Proxy load balancer is the best option for their needs. What other GCP service must they have to use the SSL Proxy load balancer?`,
        'answers': [
            {'id':0, 'desc':`Cloud Storage`},
            {'id':1, 'desc':`Cloud VPN`},
            {'id':2, 'desc':`Premium Tier networking`},
            {'id':3, 'desc':`TCP Proxy Load Balancing`},
        ],
        'answerId': [2],
        'rationale': []
    },
];

export const set7 = [
    {
        'id':701,
        'question':`A company is migrating an enterprise application to Google Cloud. When running on- premises, application administrators created user accounts that were used to run back- ground jobs. There was no actual user associated with the account, but the administrators needed an identity with which to associate permissions. What kind of identity would you recommend using when running that application in GCP?`,
        'answers': [
            {'id':0, 'desc':`Google-associated account`},
            {'id':1, 'desc':`Cloud Identity account`},
            {'id':2, 'desc':`Service account`},
            {'id':3, 'desc':`Batch account`},
        ],
        'answerId': [2],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':702,
        'question':`You are tasked with managing the roles and privileges granted to groups of developers, quality assurance testers, and site reliability engineers. Individuals frequently move between groups. Each group requires a different set of permissions. What is the best way to grant access to resources that each group needs?`,
        'answers': [
            {'id':0, 'desc':`Create a group in Google Groups for each of the three groups: developers, quality assurance testers, and site reliability engineers. Add the identities of each user to their respective group. Assign predefined roles to each group.`},
            {'id':1, 'desc':`Create a group in Google Groups for each of the three groups: developers, quality assurance testers, and site reliability engineers. Assign permissions to each user and then add the identities to their respective group.`},
            {'id':2, 'desc':`Assign each user a Cloud Identity, and grant permissions directly to those identities.`},
            {'id':3, 'desc':`Create a G Suite group for each of the three groups: developers, quality assurance testers, and site reliability engineers. Assign permissions to each user and then add the identities to their respective group.`},
        ],
        'answerId': [0],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':703,
        'question':`You are making a presentation on Google Cloud security to a team of managers in your company. Someone mentions that to comply with regulations, the organization will have to follow several security best practices, including least privilege. They would like to know how GCP supports using least privilege. What would you say?`,
        'answers': [
            {'id':0, 'desc':`GCP provides a set of three broad roles: owner, editor, and viewer. Most users will be assigned viewer unless they need to change configurations, in which case they will receive the editor role, or if they need to perform administrative functions, in which case they will be assigned owner.`},
            {'id':1, 'desc':`GCP provides a set of fine-grained permissions and predefined roles that are assigned those permissions. The roles are based on commonly grouped responsibilities. Users will be assigned only the predefined roles needed for them to perform their duties.`},
            {'id':2, 'desc':`GCP provides several types of identities. Users will be assigned a type of identity most suitable for their role in the organization.`},
            {'id':3, 'desc':`GCP provides a set of fine-grained permissions and custom roles that are created and managed by cloud users. Users will be assigned a custom role designed specifically for that user’s responsibilities.`},
        ],
        'answerId': [1],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':704,
        'question':`An online application consists of a front-end service, a back-end business logic service, and a relational database. The front-end service is stateless and runs in an instance group that scales between two and five servers. The back-end business logic runs in a Kubernetes Engine cluster. The database is implemented using Cloud SQL PostgreSQL. How many trust domains should be used for this application?`,
        'answers': [
            {'id':0, 'desc':`1.`},
            {'id':1, 'desc':`2.`},
            {'id':2, 'desc':`3.`},
            {'id':3, 'desc':`None. These services do not need trust domains.`},
        ],
        'answerId': [2],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':705,
        'question':`In the interest of separating duties, one member of your team will have permission to per- form all actions on logs. You will also rotate the duty every 90 days. How would you grant the necessary permissions?`,
        'answers': [
            {'id':0, 'desc':`Create a Google Group, assign roles/logging.admin to the group, add the identity of the person who is administering the logs at the start of the 90-day period, and remove the identity of the person who administered logs during the previous 90 days.`},
            {'id':1, 'desc':`Assign roles/logging.admin to the identity of the person who is administering the logs at the start of the 90-day period, and revoke the role from the identity of the per- son who administered logs during the previous 90 days.`},
            {'id':2, 'desc':`Create a Google Group, assign roles/logging.privateLogViewer to the group, add the identity of the person who is administering the logs at the start of the 90-day period, and remove the identity of the person who administered logs during the previ- ous 90 days.`},
            {'id':3, 'desc':`Assign roles/logging.privateLogViewer to the identity of the person who is administering the logs at the start of the 90-day period, and revoke the role from the identity of the person who administered logs during the previous 90 days.`},
        ],
        'answerId': [0],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':706,
        'question':`Your company is subject to several government and industry regulations that require all personal healthcare data to be encrypted when persistently stored. What must you do to ensure that applications processing protected data encrypts it when it is stored on disk or SSD?`,
        'answers': [
            {'id':0, 'desc':`Configure a database to use database encryption.`},
            {'id':1, 'desc':`Configure persistent disks to use disk encryption.`},
            {'id':2, 'desc':`Configure the application to use application encryption.`},
            {'id':3, 'desc':`Nothing. Data is encrypted at rest by default.`},
        ],
        'answerId': [3],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':707,
        'question':`Data can be encrypted at multiple levels, such as at the platform, infrastructure, and device levels. Data may be encrypted multiple times before it is written to persistent storage. At the device level, how is data encrypted in GCP?`,
        'answers': [
            {'id':0, 'desc':`AES256 or AES128 encryption`},
            {'id':1, 'desc':`Elliptic curve cryptography`},
            {'id':2, 'desc':`Data Encryption Standard (DES)`},
            {'id':3, 'desc':`Blowfish`},
        ],
        'answerId': [0],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':708,
        'question':`In GCP, each data chunk written to a storage system is encrypted with a data encryption key. The key is kept close to the data that it encrypts to ensure low latency when retrieving the key. How does GCP protect the data encryption key so that an attacker who gained access to the storage system storing the key could not use it to decrypt the data chunk?`,
        'answers': [
            {'id':0, 'desc':`Writes the data encryption key to a hidden location on disk`},
            {'id':1, 'desc':`Encrypts the data encryption key with a key encryption key`},
            {'id':2, 'desc':`Stores the data encryption key in a secure Cloud SQL database`},
            {'id':3, 'desc':`Applies an elliptic curve encryption algorithm for each data encryption key`},
        ],
        'answerId': [1],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':709,
        'question':`Data can be encrypted at different layers of the OSI network stack. Google Cloud may encrypt network data at multiple levels. What protocol is used at layer 7?`,
        'answers': [
            {'id':0, 'desc':`IPSec`},
            {'id':1, 'desc':`TLS`},
            {'id':2, 'desc':`ALTS`},
            {'id':3, 'desc':`ARP`},
        ],
        'answerId': [2],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':710,
        'question':`After reviewing security requirements with compliance specialists at your company, you determine that your company will need to manage its own encryption keys. Keys may be stored in the cloud. What GCP service would you recommend for storing keys?`,
        'answers': [
            {'id':0, 'desc':`Cloud Datastore`},
            {'id':1, 'desc':`Cloud Firestore`},
            {'id':2, 'desc':`Cloud KMS`},
            {'id':3, 'desc':`Bigtable`},
        ],
        'answerId': [2],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':711,
        'question':`The finance department of your company has notified you that logs generated by any finance application will need to be stored for five years. It is not likely to be accessed, but it has to be available if needed. If it were needed, you would have up to three days to retrieve the data. How would you recommend storing that data?`,
        'answers': [
            {'id':0, 'desc':`Keep it in Stackdriver Logging.`},
            {'id':1, 'desc':`Export it to Cloud Storage and store it in Coldline class storage.`},
            {'id':2, 'desc':`Export it to BigQuery and partition it by year.`},
            {'id':3, 'desc':`Export it to Cloud Pub/Sub using a different topic for each year.`},
        ],
        'answerId': [1],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':712,
        'question':`The legal department in your company notified software development teams that if a developer can deploy to production, then that developer cannot be allowed to perform the final code review before deploying to production. This is an example of which security best practice?`,
        'answers': [
            {'id':0, 'desc':`Defense in depth`},
            {'id':1, 'desc':`Separation of duties`},
            {'id':2, 'desc':`Least privilege`},
            {'id':3, 'desc':`Encryption at rest`},
        ],
        'answerId': [1],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':713,
        'question':`A startup has hired you to advise on security and compliance related to their new online game for children ages 10 to 14. Players will register to play the game, which includes col- lecting the name, age, and address of the player. Initially, the company will target custom- ers in the United States. With which regulation would you advise them to comply?`,
        'answers': [
            {'id':0, 'desc':`HIPAA/HITECH B. SOX`},
            {'id':2, 'desc':`COPPA`},
            {'id':3, 'desc':`GDPR`},
        ],
        'answerId': [2],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':714,
        'question':`The company for which you work is expanding from North America to set up operations in Europe, starting with Germany and the Netherlands. The company offers online services that collect data on users. With what regulation must your company comply?`,
        'answers': [
            {'id':0, 'desc':`ITIL`},
            {'id':1, 'desc':`TOGAF`},
            {'id':2, 'desc':`Porters Five Forces Model`},
            {'id':3, 'desc':`Ansoff Matrix`},
        ],
        'answerId': [3],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':715,
        'question':`Enterprise Self-Storage Systems is a company that recently acquired a startup software com- pany that provides applications for small and midsize self-storage companies. The company is concerned that the business strategy of the acquiring company is not aligned with the software development plans of the software development teams of the acquired company. What IT framework would you recommend the company follow to better align business strategy with software development?`,
        'answers': [
            {'id':0, 'desc':`ITIL`},
            {'id':1, 'desc':`TOGAF`},
            {'id':2, 'desc':`Porters Five Forces Model`},
            {'id':3, 'desc':`Ansoff Matrix`},
        ],
        'answerId': [0],
        'rationale': [
            {'id':0, 'desc':``},]
    },
];

export const set8 = [
    {
        'id':801,
        'question':`As an SRE, you are assigned to support several applications. In the past, these applications have had significant reliability problems. You would like to understand the performance characteristics of the applications, so you create a set of dashboards. What kind of data would you display on those dashboards?`,
        'answers': [
            {'id':0, 'desc':`Metrics and time-series data measuring key performance attributes, such as CPU utilization`},
            {'id':1, 'desc':`Detailed log data from syslog`},
            {'id':2, 'desc':`Error messages output from each application`},
            {'id':3, 'desc':`Results from the latest acceptance tests`},
        ],
        'answerId': [0],
        'rationale': []
        },
    {
        'id':802,
        'question':`After determining the optimal combination of CPU and memory resources for nodes in a Kubernetes cluster, you want to be notified whenever CPU utilization exceeds 85 percent for 5 minutes or when memory utilization exceeds 90 percent for 1 minute. What would you have to specify to receive such notifications?`,
        'answers': [
            {'id':0, 'desc':`An alerting condition`},
            {'id':1, 'desc':`An alerting policy`},
            {'id':2, 'desc':`A logging message specification`},
            {'id':3, 'desc':`An acceptance test`},
        ],
        'answerId': [1],
        'rationale': []
    },
    {
        'id':803,
        'question':`A compliance review team is seeking information about how your team handles high-risk administration operations, such as granting operating system users root privileges. Where could you find data that shows your team tracks changes to user privileges?`,
        'answers': [
            {'id':0, 'desc':`In metric time-series data`},
            {'id':1, 'desc':`In alerting conditions`},
            {'id':2, 'desc':`In audit logs`},
            {'id':3, 'desc':`In ad hoc notes kept by system administrators`},
        ],
        'answerId': [2],
        'rationale': []
    },
    {
        'id':804,
        'question':`Release management practices contribute to improving reliability by which one of the following?`,
        'answers': [
            {'id':0, 'desc':`Advocating for object-oriented programming practices`},
            {'id':1, 'desc':`Enforcing waterfall methodologies`},
            {'id':2, 'desc':`Improving the speed and reducing the cost of deploying code`},
            {'id':3, 'desc':`Reducing the use of stateful services`}
        ],
        'answerId': [2],
        'rationale': []
    },
    {
        'id':805,
        'question':`A team of software engineers is using release management practices. They want developers to check code into the central team code repository several times during the day. The team also wants to make sure that the code that is checked in is functioning as expected before building the entire application. What kind of tests should the team run before attempting to build the application?`,
        'answers': [
            {'id':0, 'desc':`Unit tests`},
            {'id':1, 'desc':`Stress tests`},
            {'id':2, 'desc':`Acceptance tests`},
            {'id':3, 'desc':`Compliance tests`},
        ],
        'answerId': [0],
        'rationale': []
        },
    {
        'id':806,
        'question':`Developers have just deployed a code change to production. They are not routing any traffic to the new deployment yet, but they are about to send a small amount of traffic to servers running the new version of code. What kind of deployment are they using?`,
        'answers': [
            {'id':0, 'desc':`Blue/Green deployment B. Before/After deployment C. Canary deployment`},
            {'id':3, 'desc':`Stress deployment`},
        ],
        'answerId': [2],
        'rationale': []
        },
    {
       'id':807,
        'question':` You have been hired to consult with an enterprise software development that is starting to adopt agile and DevOps practices. The developers would like advice on tools that they can use to help them collaborate on software development in the Google Cloud. What version control software might you recommend?`,
        'answers': [
            {'id':0, 'desc':`Jenkins and Cloud Source Repositories`},
            {'id':1, 'desc':`Syslog and Cloud Build`},
            {'id':2, 'desc':`GitHub and Cloud Build`},
            {'id':3, 'desc':`GitHub and Cloud Source Repositories`},
        ],
        'answerId': [3],
        'rationale': []
        },
    {'id':808,
        'question':` A startup offers a software-as-a-service solution for enterprise customers. Many of the com- ponents of the service are stateful, and the system has not been designed to allow incremen- tal rollout of new code. The entire environment has to be running the same version of the deployed code. What deployment strategy should they use?`,
        'answers': [
            {'id':0, 'desc':`Rolling deployment`},
            {'id':1, 'desc':`Canary deployment`},
            {'id':2, 'desc':`Stress deployment`},
            {'id':3, 'desc':`Blue/Green deployment`},
        ],
        'answerId': [3],
        'rationale': []
        },
    {'id':809,
        'question':`A service is experiencing unexpectedly high volumes of traffic. Some components of the system are able to keep up with the workload, but others are unable to process the volume of requests. These services are returning a large number of internal server errors. Develop- ers need to release a patch as soon as possible that provides some relief for an overloaded relational database service. Both memory and CPU utilization are near 100 percent. Hori- zontally scaling the relational database is not an option, and vertically scaling the database would require too much downtime. What strategy would be the fastest to implement?`,
        'answers': [
            {'id':0, 'desc':`Shed load`},
            {'id':1, 'desc':`Increase connection pool size in the database`},
            {'id':2, 'desc':`Partition the workload`},
            {'id':3, 'desc':`Store data in a Pub/Sub topic`},
        ],
        'answerId': [0],
        'rationale': []
    },
    {
        'id':810,
        'question':`A service has detected that a downstream process is returning a large number of errors. The service automatically slows down the number of messages it sends to the downstream pro- cess. This is an example of what kind of strategy?`,
        'answers': [
            {'id':0, 'desc':`Load shedding`},
            {'id':1, 'desc':`Upstream throttling`},
            {'id':2, 'desc':`Rebalancing`},
            {'id':3, 'desc':`Partitioning`},
        ],
        'answerId': [1],
        'rationale': []
    }
];

export const set9 = [
    {
        'id':901,
        'question':`A team of early career software engineers has been paired with an architect to work on a new software development project. The engineers are anxious to get started coding, but the architect objects to that course of action because there has been insufficient work prior to development. What steps should be completed before beginning development according to SDLC?`,
        'answers': [
            {'id':0, 'desc':`Business continuity planning`},
            {'id':1, 'desc':`Analysis and design`},
            {'id':2, 'desc':`Analysis and testing`},
            {'id':3, 'desc':`Analysis and documentation`},
        ],
        'answerId': [1],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':902,
        'question':`In an analysis meeting, a business executive asks about research into COTS. What is this executive asking about?`,
        'answers': [
            {'id':0, 'desc':`Research related to deciding to build versus buying a solution`},
            {'id':1, 'desc':`Research about a Java object relational mapper`},
            {'id':2, 'desc':`A disaster planning protocol`},
            {'id':3, 'desc':`Research related to continuous operations through storms (COTS), a business continu- ity practice`},
        ],
        'answerId': [0],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':903,
        'question':`Business decision-makers have created a budget for software development over the next three months. There are more projects proposed than can be funded. What measure might the decision-makers use to choose projects to fund?`,
        'answers': [
            {'id':0, 'desc':`Mean time between failures (MTBF)`},
            {'id':1, 'desc':`Recovery time objectives (RTO)`},
            {'id':2, 'desc':`Return on investment (ROI)`},
            {'id':3, 'desc':`Marginal cost displacement`},
        ],
        'answerId': [2],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':904,
        'question':`A team of developers is working on a backend service to implement a new business process. They are debating whether to use arrays, lists, or hash maps. In what stage of the SDLC are these developers at present?`,
        'answers': [
            {'id':0, 'desc':`Analysis`},
            {'id':1, 'desc':`High-level design`},
            {'id':2, 'desc':`Detailed design`},
            {'id':3, 'desc':`Maintenance`},
        ],
        'answerId': [2],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':905,
        'question':`An engineer is on call for any service-related issues with a service. In the middle of the night, the engineer receives a notification that a set of APIs is returning HTTP 500 error codes to most requests. What kind of documentation would the engineer turn to first?`,
        'answers': [
            {'id':0, 'desc':`Design documentation`},
            {'id':1, 'desc':`User documentation`},
            {'id':2, 'desc':`Operations documentation`},
            {'id':3, 'desc':`Developer documentation`},
        ],
        'answerId': [2],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':906,
        'question':`As a developer, you write code in your local environment, and after testing it, you commit it or write it to a version control system. From there it is automatically incorporated with the baseline version of code in the repository. What is the process called?`,
        'answers': [
            {'id':0, 'desc':`Software continuity planning`},
            {'id':1, 'desc':`Continuous integration (CI)`},
            {'id':2, 'desc':`Continuous development (CD)`},
            {'id':3, 'desc':`Software development lifecycle (SDLC)`},
        ],
        'answerId': [1],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':907,
        'question':`As a consulting architect, you have been asked to help improve the reliability of a distrib- uted system with a large number of custom microservices and dependencies on third-party APIs running in a hybrid cloud architecture. You have decided that at this level of complex- ity, you can learn more by experimenting with the system than by studying documents and code listings. So, you start by randomly shutting down servers and simulating network par- titions. This is an example of what practice?`,
        'answers': [
            {'id':0, 'desc':`Irresponsible behavior`},
            {'id':1, 'desc':`Integration testing`},
            {'id':2, 'desc':`Load testing`},
            {'id':3, 'desc':`Chaos engineering`},
        ],
        'answerId': [3],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':908,
        'question':`There has been a security breach at your company. A malicious actor outside of your com- pany has gained access to one of your services and was able to capture data that was passed into the service from clients. Analysis of the incident finds that a developer included a pri- vate key in a configuration file that was uploaded to a version control repository. The repos- itory is protected by several defensive measures, including role-based access controls and network-level controls that require VPN access to reach the repository. As part of backup procedures, the repository is backed up to a cloud storage service. The folder that stores
        the backup was mistakenly granted public access privileges for up to three weeks before the error was detected and corrected. During the post-mortem analysis of this incident, one of the objectives should be to`,
        'answers': [
            {'id':0, 'desc':`Identify the developer who uploaded the private key to a version control repository. They are responsible for this incident.`},
            {'id':1, 'desc':`Identify the system administrator who backed up the repository to an unsecured stor- age service. They are responsible for this incident.`},
            {'id':2, 'desc':`Identify the system administrator who misconfigured the storage system. They are responsible for this incident.`},
            {'id':3, 'desc':`Identify ways to better scan code checked into the repository for sensitive information and perform checks on cloud storage systems to identify weak access controls.`},
        ],
        'answerId': [3],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':909,
        'question':`You have just been hired as a cloud architect for a large financial institution with global reach. The company is highly regulated, but it has a reputation for being able to manage IT projects well. What practices would you expect to find in use at the enterprise level that you might not find at a startup?`,
        'answers': [
            {'id':0, 'desc':`Agile methodologies`},
            {'id':1, 'desc':`SDLC`},
            {'id':2, 'desc':`ITIL`},
            {'id':3, 'desc':`Business continuity planning`},
        ],
        'answerId': [2],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':910,
        'question':`A software engineer asks for an explanation of the difference between business continuity
        planning and DR planning. What would you say is the difference?`,
        'answers': [
            {'id':0, 'desc':`There is no difference; the terms are synonymous.`},
            {'id':1, 'desc':`They are two unrelated practices.`},
            {'id':2, 'desc':`DR is a part of business continuity planning, which includes other practices for con- tinuing business operations in the event of an enterprise-level disruption of services.`},
            {'id':3, 'desc':`Business continuity planning is a subset of disaster recovery.`},
        ],
        'answerId': [2],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':911,
        'question':`In addition to ITIL, there are other enterprise IT process management frameworks. Which
        other standard might you reference when working on enterprise IT management issues?`,
        'answers': [
            {'id':0, 'desc':`ISO/ICE 20000`},
            {'id':1, 'desc':`Java Coding Standards`},
            {'id':2, 'desc':`PEP-8`},
            {'id':3, 'desc':`ISO/IEC 27002`},
        ],
        'answerId': [0],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':912,
        'question':`A minor problem repeatedly occurs with several instances of an application that causes a slight increase in the rate of errors returned. Users who retry the operation usually succeed on the second or third attempt. By your company’s standards, this is considered a minor incident. Should you investigate this problem?`,
        'answers': [
            {'id':0, 'desc':`No. The problem is usually resolved when users retry.`},
            {'id':1, 'desc':`No. New feature requests are more important.`},
            {'id':2, 'desc':`Yes. But only investigate if the engineering manager insists.`},
            {'id':3, 'desc':`Yes. Since it is a recurring problem, there may be an underlying bug in code or weakness in the design that should be corrected.`},
        ],
        'answerId': [3],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':913,
        'question':`A CTO of a midsize company hires you to consult on the company’s IT practices. During preliminary interviews, you realize that the company does not have a business continuity plan. What would you recommend they develop first with regards to business continuity?`,
        'answers': [
            {'id':0, 'desc':`Recovery time objectives (RTO)`},
            {'id':1, 'desc':`An insurance plan`},
            {'id':2, 'desc':`A disaster plan`},
            {'id':3, 'desc':`A service management plan`},
        ],
        'answerId': [2],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':914,
        'question':`A developer codes a new algorithm and tests it locally. They then check the code into the team’s version control repository. This triggers an automatic set of unit and integration tests. The code passes, and it is integrated into the baseline code and included in the next build. The build is released and runs as expected for 30 minutes. A sudden spike in traffic causes the new code to generate a large number of errors. What might the team decide to do after the post-mortem analysis of this incident?`,
        'answers': [
            {'id':0, 'desc':`Fire the developer who wrote the algorithm`},
            {'id':1, 'desc':`Have at least two engineers review all of the code before it is released
            Review Questions 191 C. Perform stress tests on changes to code that may be sensitive to changes in load`},
            {'id':3, 'desc':`Ask the engineering manager to provide additional training to the engineer who revised the algorithm`},
        ],
        'answerId': [2],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':915,
        'question':`Your company’s services are experiencing a high level of errors. Data ingest rates are drop- ping rapidly. Your data center is located in an area prone to hurricanes, and these events are occurring during peak hurricane season. What criteria do you use to decide to invoke your disaster recovery plan?`,
        'answers': [
            {'id':0, 'desc':`When your engineering manager says to invoke the disaster recovery plan`},
            {'id':1, 'desc':`When the business owner of the service says to invoke the disaster recovery plan`},
            {'id':2, 'desc':`When the disaster plan criteria for invoking the disaster recovery plan are met`},
            {'id':3, 'desc':`When the engineer on call says to invoke the disaster recovery plan`},
        ],
        'answerId': [2],
        'rationale': [
            {'id':0, 'desc':``},]
    },
];

export const set10 = [
    {
        'id':1001,
        'question':`You have been asked to help with a new project kickoff. The project manager has invited engineers and managers from teams directly working on the project. They have also invited members of teams that might use the service to be built by the project. What is the motiva- tion of the project manager for inviting these various participants?`,
        'answers': [
            {'id':0, 'desc':`To communicate with stakeholders`},
            {'id':1, 'desc':`To meet compliance requirements`},
            {'id':2, 'desc':`To practice good cost control measures`},
            {'id':3, 'desc':`To solicit advice on building team skills`},
        ],
        'answerId': [0],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':1002,
        'question':`A junior engineer asks you to explain some terms often used in meetings. In particular, the engineer wants to know the difference between a project and a program. How would you explain the difference?
        `,
        'answers': [
            {'id':0, 'desc':`There is no difference; the two terms are used interchangeably.`},
            {'id':1, 'desc':`A project is part of a program, and programs span multiple departments; both exist to
            execute organizational strategy.`},
            {'id':2, 'desc':`A program is part of a project, and projects span multiple departments; both exist to execute organizational strategy.`},
            {'id':3, 'desc':`A project is used only to describe software development efforts, while a program can refer to any company initiative.`},
        ],
        'answerId': [1],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':1003,
        'question':`An architect writes a post for an internal blog describing the pros and cons of two approaches to improving the reliability of a widely used service. This is an example of what stage of stakeholder management?`,
        'answers': [
            {'id':0, 'desc':`Identifying stakeholders`},
            {'id':1, 'desc':`Determining their roles and scope of interests`},
            {'id':2, 'desc':`Developing a communications plan`},
            {'id':3, 'desc':`Communicating with and influencing stakeholders`},
        ],
        'answerId': [3],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':1004,
        'question':`Your company provides a SaaS product used by mobile app developers to capture and ana- lyze log messages from mobile devices in real time. Another company begins to offer a simi- lar service but includes alerting based on metrics as well as log messages. This prompts the executives to change strategy from developing additional log analysis features to developing alerting features. This is an example of a change prompted by which one of the following?`,
        'answers': [
            {'id':0, 'desc':`Individual choice`},
            {'id':1, 'desc':`Competition`},
            {'id':2, 'desc':`Skills gap`},
            {'id':3, 'desc':`Unexpected economic factors`},
        ],
        'answerId': [1],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':1005,
        'question':`In May 2018, the EU began enforcement of a new privacy regulation known as the GDPR. This required many companies to change how they manage personal information about citizens of the EU. This is an example of what kind of change?`,
        'answers': [
            {'id':0, 'desc':`Individual choice`},
            {'id':1, 'desc':`Competition`},
            {'id':2, 'desc':`Skills gap`},
            {'id':3, 'desc':`Regulation`},
        ],
        'answerId': [3],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':1006,
        'question':`A program manager asks for your advice on managing change in projects. The program manager is concerned that there are multiple changes underway simultaneously, and it is difficult to understand the impact of these changes. What would you suggest as an approach to managing this change?`,
        'answers': [
            {'id':0, 'desc':`Stop making changes until the program manager can understand their potential impacts.`},
            {'id':1, 'desc':`Communicate more frequently with stakeholders.`},
            {'id':2, 'desc':`Implement a Plan-Do-Study-Act methodology.`},
            {'id':3, 'desc':`Implement cost control measures to limit the impact of simultaneous changes.`},
        ],
        'answerId': [2],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':1007,
        'question':`A company for whom you consult is concerned about the potential for startups to disrupt its industry. The company has asked for your help implementing new services using IoT, cloud computing, and AI. There is a high risk that this initiative will fail. This is an exam- ple of which one of the following?`,
        'answers': [
            {'id':0, 'desc':`Typical change management issues`},
            {'id':1, 'desc':`A digital transformation initiative`},
            {'id':2, 'desc':`A project in response to a competitor’s product`},
            {'id':3, 'desc':`A cost management initiative`},
        ],
        'answerId': [1],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':1008,
        'question':`You and another architect in your company are evaluating the skills possessed by members of several software development teams. This exercise was prompted by a new program to expand the ways that customers can interact with the company. This will require a signifi- cant amount of mobile development. This kind of evaluation is an example of which part of team skill management?`,
        'answers': [
            {'id':0, 'desc':`Defining skills needed to execute programs and projects defined by organizational strategy`},
            {'id':1, 'desc':`Identifying skill gaps on a team or in an organization`},
            {'id':2, 'desc':`Working with managers to develop plans to develop skills of individual contributors`},
            {'id':3, 'desc':`Helping recruit and retain people with the skills needed by the team`},
        ],
        'answerId': [1],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':1009,
        'question':`You and an engineering manager in your company are creating a schedule of training courses for engineers to learn mobile development skills. This kind of planning is an example of which part of team skill management?`,
        'answers': [
            {'id':0, 'desc':`Defining skills needed to execute programs and projects defined by organizational strategy`},
            {'id':1, 'desc':`Identifying skill gaps on a team or in an organization`},
            {'id':2, 'desc':`Working with managers to develop plans to develop skills of individual contributors`},
            {'id':3, 'desc':`Helping recruit and retain people with the skills needed by the team`},
        ],
        'answerId': [2],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':1010,
        'question':`After training engineers on the latest mobile development tools and techniques, managers determine that the teams do not have a sufficient number of engineers to complete software development projects in the time planned. The managers ask for your assistance in writing job advertisements reaching out to your social network. These activities are an example of which part of team skill management?`,
        'answers': [
            {'id':0, 'desc':`Defining skills needed to execute programs and projects defined by organization strategy`},
            {'id':1, 'desc':`Identifying skill gaps on a team or in an organization`},
            {'id':2, 'desc':`Working with managers to develop plans to develop skills of individual contributors`},
            {'id':3, 'desc':`Helping recruit and retain people with the skills needed by the team`},
        ],
        'answerId': [3],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':1011,
        'question':`A team of consultants from your company is working with a customer to deploy a new offering that uses several services that your company provides. They are making design decisions about how to implement authentication and authorization and want to discuss options with an architect. This is an example of which aspect of customer success management?`,
        'answers': [
            {'id':0, 'desc':`Customer acquisition`},
            {'id':1, 'desc':`Marketing and sales`},
            {'id':2, 'desc':`Professional services`},
            {'id':3, 'desc':`Training and support`},
        ],
        'answerId': [2],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':1012,
        'question':`Customers are noticing delays in receiving messages from an alerting service that your company provides. They call your company and provide details that are logged into a cen- tral database and reviewed by engineers who are troubleshooting the problem. This is an example of which aspect of customer success management?`,
        'answers': [
            {'id':0, 'desc':`Customer acquisition`},
            {'id':1, 'desc':`Marketing and sales`},
            {'id':2, 'desc':`Professional services`},
            {'id':3, 'desc':`Training and support`},
        ],
        'answerId': [3],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':1013,
        'question':`As an architect, you have been invited to attend a trade conference in your field of exper- tise. In addition to presenting at the conference, you will spend time at your company’s booth in the exhibit hall, where you will discuss your company’s products with conference attendees. This is an example of what aspect of customer success management?`,
        'answers': [
            {'id':0, 'desc':`Customer acquisition`},
            {'id':1, 'desc':`Marketing and sales`},
            {'id':2, 'desc':`Professional services`},
            {'id':3, 'desc':`Training and support`},
        ],
        'answerId': [0],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':1014,
        'question':`A group of executives has invited you to a meeting to represent architects in a discussion about identifying projects and programs that require funding and prioritizing those efforts based on the company’s strategy and needs. This is an example of what aspect of cost management?`,
        'answers': [
            {'id':0, 'desc':`Resource planning`},
            {'id':1, 'desc':`Cost estimating`},
            {'id':2, 'desc':`Cost budgeting`},
            {'id':3, 'desc':`Cost control`},
        ],
        'answerId': [0],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':1015,
        'question':`An engineer has been tasked with creating reports to help managers track spending. This is an example of what aspect of cost management?`,
        'answers': [
            {'id':0, 'desc':`Resource planning`},
            {'id':1, 'desc':`Cost estimating`},
            {'id':2, 'desc':`Cost budgeting`},
            {'id':3, 'desc':`Cost control`},
        ],
        'answerId': [3],
        'rationale': [
            {'id':0, 'desc':``},]
    },
];

export const set11 = [
    {
        'id':1101,
        'question':`A team of developers is tasked with developing an enterprise application. They have interviewed stakeholders and collected requirements. They are now designing the system and plan to begin implementation next. After implementation, they will verify that the application meets specifications. They will not revise the design once coding starts. What application development methodology is this team using?`,
        'answers': [
            {'id':0, 'desc':`Extreme programming`},
            {'id':1, 'desc':`Agile methodology`},
            {'id':2, 'desc':`Waterfall methodology`},
            {'id':3, 'desc':`Spiral methodology`},
        ],
        'answerId': [2],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':1102,
        'question':`A team of developers is tasked with developing an enterprise application. They have inter- viewed stakeholders and set a scope of work that will deliver a subset of the functionality needed. Developers and stakeholders have identified risks and ways of mitigating them. They then proceed to gather requirements for the subset of functionalities to be imple- mented. That is followed by design, implementation, and testing. There is no collaboration between developers and stakeholders until after testing, when developers review results with stakeholders and plan the next iteration of development. What application develop- ment methodology is this team using?`,
        'answers': [
            {'id':0, 'desc':`Extreme programming`},
            {'id':1, 'desc':`Agile methodology`},
            {'id':2, 'desc':`Waterfall methodology`},
            {'id':3, 'desc':`Spiral methodology`},
        ],
        'answerId': [3],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':1103,
        'question':`A team of developers is tasked with developing an enterprise application. They meet daily with stakeholders to discuss the state of the project. The developers and stakeholders have identified a set of functionalities to be implemented over the next two weeks. After some design work, coding begins. A new requirement is discovered, and developers and stake- holders agree to prioritize implementing a feature to address this newly discovered require- ment. As developers complete small functional units of code, they test it. If the code passes the tests, the code unit is integrated with the version-controlled codebase. What application development methodology is this team using?`,
        'answers': [
            {'id':0, 'desc':`Continuous integration`},
            {'id':1, 'desc':`Agile methodology`},
            {'id':2, 'desc':`Waterfall methodology`},
            {'id':3, 'desc':`Spiral methodology`},
        ],
        'answerId': [1],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':1104,
        'question':`You are a developer at a startup company that is planning to release its first version of a new mobile service. You have discovered a design flaw that generates and sends more data to mobile devices than is needed. This is increasing the latency of messages between mobile devices and backend services running in the cloud. Correcting the design flaw will delay the release of the service by at least two weeks. You decide to address the long latency problem by coding a workaround that does not send the unnecessary data. The design flaw is still there and is generating unnecessary data, but the service can ship under these conditions. This is an example of what?`,
        'answers': [
            {'id':0, 'desc':`Incurring technical debt`},
            {'id':1, 'desc':`Paying down technical debt`},
            {'id':2, 'desc':`Shifting risk`},
            {'id':3, 'desc':`Improving security`},
        ],
        'answerId': [0],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':1105,
        'question':`You are a developer at a startup company that has just released a new service. During development, you made suboptimal coding choices to keep the project on schedule. You are now planning your next two weeks of work, which you decide will include implementing
        a feature the product manager wanted in the initial release but was postponed to a release occurring soon after the initial release. You also include time to refactor code that was introduced to correct a bug found immediately before the planned release date. That code blocks the worst impact of the bug, but it does not correct the flaw. Revising that subopti- mal code is an example of what?`,
        'answers': [
            {'id':0, 'desc':`Incurring technical debt`},
            {'id':1, 'desc':`Paying down technical debt`},
            {'id':2, 'desc':`Shifting risk`},
            {'id':3, 'desc':`Improving security`},
        ],
        'answerId': [1],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':1106,
        'question':`As a developer of a backend service for managing inventory, your manager has asked you to include a basic API for the inventory service. You plan to follow best practice recommenda- tions. What is the minimal set of API functions that you would include?`,
        'answers': [
            {'id':0, 'desc':`Create, read, update, and delete`},
            {'id':1, 'desc':`List, get, create, update, and delete`},
            {'id':2, 'desc':`Create, delete, and list`},
            {'id':3, 'desc':`Create and delete`},
        ],
        'answerId': [1],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':1107,
        'question':`A junior developer asks your advice about handling errors in API functions. The developer wants to know what kind of data and information should be in an API error message. What would you recommend?`,
        'answers': [
            {'id':0, 'desc':`Return HTTP status 200 with additional error details in the payload.`},
            {'id':1, 'desc':`Return a status code form with the standard 400s and 500s HTTP status codes along
            with additional error details in the payload.`},
            {'id':2, 'desc':`Return error details in the payload, and do not return a code.`},
            {'id':3, 'desc':`Define your own set of application-specific error codes.`},
        ],
        'answerId': [1],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':1108,
        'question':`A junior developer asks your advice about performing authentication in API functions. The developer wants to know how they can allow users of the API to make assertions about what they are authorized to do. What would you recommend?`,
        'answers': [
            {'id':0, 'desc':`Use JSON Web Tokens (JWTs)`},
            {'id':1, 'desc':`Use API keys`},
            {'id':2, 'desc':`Use encryption`},
            {'id':3, 'desc':`Use HTTPS instead of HTTP`},
        ],
        'answerId': [0],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':1109,
        'question':`Your startup has released a new online game that includes features that allow users to accumulate points by playing the game. Points can be used to make in-game purchases. You have discovered that some users are using bots to play the game programmatically much faster than humans can play the game. The use of bots is unauthorized in the game. You modify the game API to prevent more than 10 function calls per user, per minute. This is an example of what practice?`,
        'answers': [
            {'id':0, 'desc':`Encryption`},
            {'id':1, 'desc':`Defense in depth`},
            {'id':2, 'desc':`Least privileges`},
            {'id':3, 'desc':`Resource limiting`},
        ],
        'answerId': [3],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':1110,
        'question':`A team of developers is creating a set of tests for a new service. The tests are defined using a set of conditions or input values and expected output values. The tests are then executed by reading the test data source, and for each test the software being tested is executed and the output is compared to the expected value. What kind of testing framework is this?`,
        'answers': [
            {'id':0, 'desc':`Data-driven testing`},
            {'id':1, 'desc':`Hybrid testing`},
            {'id':2, 'desc':`Keyword-driven testing`},
            {'id':3, 'desc':`Model-based testing`},
        ],
        'answerId': [0],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':1111,
        'question':`Your company is moving an enterprise application to Google Cloud. The application runs on a cluster of virtual machines, and workloads are distributed by a load balancer. Your team considered revising the application to use containers and the Kubernetes Engine, but they decide not to make any unnecessary changes before moving the application to the cloud. This is an example of what migration strategy?`,
        'answers': [
            {'id':0, 'desc':`Lift and shift`},
            {'id':1, 'desc':`Move and improve`},
            {'id':2, 'desc':`Rebuild in the cloud`},
            {'id':3, 'desc':`End of life`},
        ],
        'answerId': [0],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':1112,
        'question':`As a consultant to an insurance company migrating to the Google Cloud, you have been asked to lead the effort to migrate data from AWS S3 to Cloud Storage. Which transfer method would you consider first?`,
        'answers': [
            {'id':0, 'desc':`Google Transfer Service`},
            {'id':1, 'desc':`gsutil command line`},
            {'id':2, 'desc':`Google Transfer Appliance`},
            {'id':3, 'desc':`Cloud Dataproc`},
        ],
        'answerId': [0],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':1113,
        'question':`You are a consultant to an insurance company migrating to GCP. Five petabytes of business-sensitive data need to be transferred from the on-premises data center to Cloud Storage. You have a 10 GB network between the on-premises data center and Google Cloud. What transfer option would you recommend?`,
        'answers': [
            {'id':0, 'desc':`gsutil`},
            {'id':1, 'desc':`gcloud`},
            {'id':2, 'desc':`Cloud Transfer Appliance`},
            {'id':3, 'desc':`Cloud Transfer Service`},
        ],
        'answerId': [2],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':1114,
        'question':`You are migrating a data warehouse from an on-premises database to BigQuery. You would like to write a script to perform some of the migration steps. What component of the GCP SDK will you likely need to use to create the new data warehouse in BigQuery?`,
        'answers': [
            {'id':0, 'desc':`cbt`},
            {'id':1, 'desc':`bq`},
            {'id':2, 'desc':`gsutil`},
            {'id':3, 'desc':`kubectl`},
        ],
        'answerId': [1],
        'rationale': [
            {'id':0, 'desc':``},]
    },
    {
        'id':1115,
        'question':`You are setting up a new laptop that is configured with a standard set of tools for developers and architects, including some GCP SDK components. You will be working extensively with the GCP SDK and want to know specifically which components are installed and
        up to date. What command would you run on the laptop?`,
        'answers': [
            {'id':0, 'desc':`gsutil component list`},
            {'id':1, 'desc':`cbt component list`},
            {'id':2, 'desc':`gcloud component list`},
            {'id':3, 'desc':`bq component list`},
        ],
        'answerId': [2],
        'rationale': [
            {'id':0, 'desc':``},]
    },
];

export const set12 = [
    {
        'id':1201,
        'question':`Your midsize company has decided to assess the possibility of moving some or all of its enterprise applications to the cloud. As the CTO, you have been tasked with determining how much it would cost and what the benefits of a cloud migration would be. What would you do first?`,
        'answers': [
            {'id':0, 'desc':`Take inventory of applications and infrastructure, document dependencies, and iden- tify compliance and licensing issues.`},
            {'id':1, 'desc':`Create a request for proposal from cloud vendors.`},
            {'id':2, 'desc':`Discuss cloud licensing issues with enterprise software vendors.`},
            {'id':3, 'desc':`Interview department leaders to identify their top business pain points.`},
        ],
        'answerId': [0],
        'rationale': []
    },
    {
        'id':1202,
        'question':`You are working with a colleague on a cloud migration plan. Your colleague would like to start migrating data. You have completed an assessment but no other preparation work. What would you recommend before migrating data?`,
        'answers': [
            {'id':0, 'desc':`Migrating applications`},
            {'id':1, 'desc':`Conducting a pilot project`},
            {'id':2, 'desc':`Migrating all identities and access controls`},
            {'id':3, 'desc':`Redesigning relational data models for optimal performance`},
        ],
        'answerId': [1],
        'rationale': []
    },
    {
        'id':1203,
        'question':`As the CTO of your company, you are responsible for approving a cloud migration plan for services that include a wide range of data. You are reviewing a proposed plan than includes an assessment, pilot project, data migration, application migration, and optimization. What should you look for as part of the data migration plan?`,
        'answers': [
            {'id':0, 'desc':`Database reconfiguration data`},
            {'id':1, 'desc':`Firewall rules to protect databases`},
            {'id':2, 'desc':`An assessment of data classification and regulations relevant to the data to be migrated`},
            {'id':3, 'desc':`A detailed description of current backup operations`},
        ],
        'answerId': [2],
        'rationale': []
    },
    {
        'id':1204,
        'question':`A client of yours is prioritizing applications to move to the cloud. One system written in Java is a Tier 1 production system that must be available 24/7; it depends on three Tier 2 services that are running on-premises, and two other Tier 1 applications depend on it. Which of these factors is least important from a risk assessment perspective?`,
        'answers': [
            {'id':0, 'desc':`The application is written in Java.`},
            {'id':1, 'desc':`The application must be available 24/7.`},
            {'id':2, 'desc':`The application depends on three Tier 2 services.`},
            {'id':3, 'desc':`Two other Tier 1 applications depend on it.`},
        ],
        'answerId': [0],
        'rationale': []
    },
    {
        'id':1205,
        'question':`As part of a cloud migration, you will be migrating a relational database to the cloud. The database has strict SLAs, and it should not be down for more than a few seconds a month. The data stores approximately 500 GB of data, and your network has 100 Gbps band- width. What method would you consider first to migrate this database to the cloud?`,
        'answers': [
            {'id':0, 'desc':`Use a third-party backup and restore application.`},
            {'id':1, 'desc':`Use the MySQL data export program, and copy the export file to the cloud.`},
            {'id':2, 'desc':`Set up a replica of the database in the cloud, synchronize the data, and then switch traffic to the instance in the cloud.`},
            {'id':3, 'desc':`Transfer the data using the Google Transfer Appliance.`},
        ],
        'answerId': [2],
        'rationale': []
    },
    {
        'id':1206,
        'question':`Your company is running several third-party enterprise applications. You are reviewing the licenses and find that they are transferrable to the cloud, so you plan to take advantage of that option. This form of licensing is known as which one of the following?`,
        'answers': [
            {'id':0, 'desc':`Compliant licensing`},
            {'id':1, 'desc':`Bring-your-own license`},
            {'id':2, 'desc':`Pay-as-you-go license`},
            {'id':3, 'desc':`Metered pricing`},
        ],
        'answerId': [1],
        'rationale': []
    },
    {
        'id':1207,
        'question':`Your company is running several third-party enterprise applications. You are reviewing the licenses and find that they are not transferrable to the cloud. You research your options and see that the vendor offers an option to pay a licensing fee based on how long you use the application in the cloud. What is this option called?`,
        'answers': [
            {'id':0, 'desc':`Compliant licensing`},
            {'id':1, 'desc':`Bring-your-own license`},
            {'id':2, 'desc':`Pay-as-you-go license`},
            {'id':3, 'desc':`Incremental payment licensing`},
        ],
        'answerId': [2],
        'rationale': []
    },
    {
        'id':1208,
        'question':`You have been asked to brief executives on the networking aspects of the cloud migration. You want to begin at the highest level of abstraction and then drill down into lower-level components. What topic would you start with?`,
        'answers': [
            {'id':0, 'desc':`Routes`},
            {'id':1, 'desc':`Firewalls`},
            {'id':2, 'desc':`VPCs`},
            {'id':3, 'desc':`VPNs`},
        ],
        'answerId': [2],
        'rationale': []
    },
    {
        'id':1209,
        'question':`You have created a VPC in Google Cloud, and subnets were created automatically. What range of IP addresses would you not expect to see in use with the subnets?`,
        'answers': [
            {'id':0, 'desc':`10.0.0.0 to 10.255.255.255`},
            {'id':1, 'desc':`72.16.0.0 to 172.31.255.255`},
            {'id':2, 'desc':`192.168.0.0 to 192.168.255.255`},
            {'id':3, 'desc':`201.1.1.0 to 201.2.1.0`},
        ],
        'answerId': [3],
        'rationale': []
    },
    {
        'id':1210,
        'question':`A network engineer is helping you plan connectivity between your on-premises network and Google Cloud. The engineer estimates that you will need 6 Gbps of bandwidth in total between the on-premises data center and Google Cloud. The traffic may be split between multiple connections. How many VPN endpoints will you need?`,
        'answers': [
            {'id':0, 'desc':`1`},
            {'id':1, 'desc':`2`},
            {'id':2, 'desc':`3`},
            {'id':3, 'desc':`6`},
        ],
        'answerId': [1],
        'rationale': []
    },
    {
        'id':1211,
        'question':`During migration planning, you learn that traffic to the subnet containing a set of data- bases must be restricted. What mechanism would you plan to use to control the flow of traffic to a subnet?`,
        'answers': [
            {'id':0, 'desc':`IAM roles`},
            {'id':1, 'desc':`Firewall rules`},
            {'id':2, 'desc':`VPNs`},
            {'id':3, 'desc':`VPCs`},
        ],
        'answerId': [1],
        'rationale': []
    },
    {
        'id':1212,
        'question':`During migration planning, you learn that some members of the network management team will need the ability to manage all network components, but others on the team will only need read access to the state of the network. What mechanism would you plan to use to control the user access?`,
        'answers': [
            {'id':0, 'desc':`IAM roles`},
            {'id':1, 'desc':`Firewall rules`},
            {'id':2, 'desc':`VPNs`},
            {'id':3, 'desc':`VPCs
            `},
        ],
        'answerId': [0],
        'rationale': []
    },
    {
        'id':1213,
        'question':`Executives in your company have decided that the company should not route its GCP-only traffic over public internet networks. What Google Cloud service would you plan to use to distribute the workload of an enterprise application?`,
        'answers': [
            {'id':0, 'desc':`Global load balancing`},
            {'id':1, 'desc':`Simple network management protocol`},
            {'id':2, 'desc':`Content delivery network`},
            {'id':3, 'desc':`VPNs`},
        ],
        'answerId': [0],
        'rationale': []
    },
    {
        'id':1214,
        'question':`Executives in your company have decided to expand operations from just North America to Europe as well. Applications will be run in several regions. All users should be routed to the nearest healthy server running the application they need. What Google Cloud service would you plan to use to meet this requirement?`,
        'answers': [
            {'id':0, 'desc':`Global load balancing`},
            {'id':1, 'desc':`Cloud Interconnect`},
            {'id':2, 'desc':`Content delivery network`},
            {'id':3, 'desc':`VPNs`},
        ],
        'answerId': [0],
        'rationale': []
    },
    {
        'id':1215,
        'question':`Executives in your company have decided that the company should expand its service offer- ings to a global market. You company distributes education content online. Maintaining low latency is a top concern. What type of network service would you expect to use to ensure low-latency access to content from around the globe?`,
        'answers': [
            {'id':0, 'desc':`Routes`},
            {'id':1, 'desc':`Firewall rules`},
            {'id':2, 'desc':`Content delivery network`},
            {'id':3, 'desc':`VPNs`},
        ],
        'answerId': [2],
        'rationale': []
    },
];
