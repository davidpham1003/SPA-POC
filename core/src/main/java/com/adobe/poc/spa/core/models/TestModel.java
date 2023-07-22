package com.adobe.poc.spa.core.models;

import com.adobe.cq.export.json.ComponentExporter;

interface TestModel extends ComponentExporter {
    public String getTitle();
}
